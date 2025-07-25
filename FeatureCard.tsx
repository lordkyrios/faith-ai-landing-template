import { motion } from "framer-motion";

export default function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="bg-white shadow-md hover:shadow-lg p-6 rounded-xl transition text-left"
    >
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-sm text-gray-600">{description}</p>
    </motion.div>
  );
}
