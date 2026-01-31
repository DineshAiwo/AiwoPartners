import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  backgroundVideo?: string;
}

export const PageHeader = ({ title, subtitle, backgroundImage, backgroundVideo }: PageHeaderProps) => {
  return (
    <section className="page-hero relative overflow-hidden">
      {/* Background Video */}
      {backgroundVideo && (
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-background/70" />
        </div>
      )}

      {/* Background Image */}
      {backgroundImage && !backgroundVideo && (
        <div 
          className="absolute inset-0 z-0"
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-background/75" />
        </div>
      )}

      {/* Default Background Elements */}
      {!backgroundImage && !backgroundVideo && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-30"
            style={{ 
              background: 'radial-gradient(circle, rgba(26, 35, 126, 0.4) 0%, transparent 70%)' 
            }}
          />
        </div>
      )}

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
