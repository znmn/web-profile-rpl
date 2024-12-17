import { motion } from "framer-motion";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const IconTheme = ({ icon }: { icon: IconDefinition }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <FontAwesomeIcon
        icon={icon}
        className="w-4 lg:w-5 h-4 lg:h-5 text-gray-800 dark:text-gray-200 duration-200"
      />
    </motion.div>
  );
};
