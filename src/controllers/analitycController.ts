interface Row {
	dimensionValues: { value: string }[];
	metricValues: { value: string }[];
}

interface YearValue {
	year: number;
	value: number;
}

interface PagePercent {
	page: string;
	percent: string;
}

export interface Reports {
	data: {
		yearValue: YearValue[];
		pagePercent: PagePercent[];
	} | null;
}

const getYearValue = (rows: Row[]): YearValue[] => {
	const output = rows.reduce((result: YearValue[], row) => {
		row.dimensionValues.forEach((dim, i) => {
			result.push({
				year: Number(dim.value),
				value: Number(row.metricValues[i].value),
			});
		});
		return result;
	}, []);

	return output;
};

const pagePercent = (rows: Row[]): PagePercent[] => {
	const output = rows.reduce((result: { [key: string]: number }, row) => {
		row.dimensionValues.forEach((dim, i) => {
			const path = dim.value,
				paths = path.split("/");
			const key = (paths.length > 2 ? paths[1] : path === "/" ? "home" : path.replace("/", "")).replace(/^\w/, (c) => c.toUpperCase());

			result[key] = (result[key] || 0) + Number(row.metricValues[i].value);
		});

		return result;
	}, {});

	const total = Object.values(output).reduce((sum, value) => sum + value, 0);

	return Object.entries(output).map(([key, value]) => ({
		page: key,
		percent: `${((value / total) * 100).toFixed(0)}%`,
	}));
};

export const getReports = async (): Promise<Reports> => {
	const { GA_PROPERTY_ID, GA_BEARER_TOKEN } = process.env;

	if (!GA_PROPERTY_ID) throw new Error("GA_PROPERTY_ID not found");
	if (!GA_BEARER_TOKEN) throw new Error("UNAUTHENTICATED");

	const date10YearsAgo = new Date(new Date().setFullYear(new Date().getFullYear() - 10)),
		date1YearAgo = new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
		dateLimit = new Date("2016-01-01");

	const data = await fetch(`https://analyticsdata.googleapis.com/v1beta/properties/${GA_PROPERTY_ID}:batchRunReports`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${GA_BEARER_TOKEN}`,
		},
		body: JSON.stringify({
			requests: [
				{
					dateRanges: [
						{
							// 1 year ago to today yyyy-mm-dd
							startDate: date1YearAgo.toISOString().split("T")[0],
							endDate: "today",
						},
					],
					dimensions: [
						{
							name: "pagePath",
						},
					],
					metrics: [
						{
							name: "activeUsers",
						},
					],
				},
				{
					dateRanges: [
						{
							// 10 years ago to today yyyy-mm-dd if > "2016-01-01" | "2016-01-01" to today
							startDate: date10YearsAgo > dateLimit ? date10YearsAgo.toISOString().split("T")[0] : dateLimit.toISOString().split("T")[0],
							endDate: "today",
						},
					],
					dimensions: [
						{
							name: "year",
						},
					],
					metrics: [
						{
							name: "activeUsers",
						},
					],
				},
			],
		}),
	}).then((res) => res.json());
	if (data.error) throw new Error(data.error.status);

	const { reports } = data;
	const pageData = pagePercent(reports[0].rows as Row[]);
	const yearData = getYearValue(reports[1].rows as Row[]);

	return {
		data: {
			pagePercent: pageData,
			yearValue: yearData,
		},
	};
};
