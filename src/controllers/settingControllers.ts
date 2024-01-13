import fs from "fs";

export interface Settings {
	contact: string;
	youtube: string;
	instagram: string;
	linkedin: string;
	github: string;
}

export interface SettingsResponse {
	data: Settings;
}

export const keysSettings: (keyof Settings)[] = ["contact", "youtube", "instagram", "linkedin", "github"];

export const getSettings = async (): Promise<SettingsResponse> => {
	const settings = fs.readFileSync("./src/data/settings.json", "utf8");
	return { data: JSON.parse(settings) };
};

export const updateSettings = async (data: Partial<Settings>): Promise<SettingsResponse> => {
	const dataUpdate: Partial<Settings> = {};
	for (const key of keysSettings) {
		if (data[key] !== undefined) {
			dataUpdate[key] = String(data[key]);
		}
	}
	if (Object.keys(dataUpdate).length === 0) {
		throw new Error("No data to update");
	}

	const settings = await getSettings();
	const updatedSettings = { ...settings.data, ...dataUpdate };
	fs.writeFileSync("./src/data/settings.json", JSON.stringify(updatedSettings, null, 2), "utf8");
	return { data: updatedSettings };
};
