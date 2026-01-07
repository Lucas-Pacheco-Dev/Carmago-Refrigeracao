import { motion } from "framer-motion";
import { Snowflake, Thermometer, Wrench, Zap, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Snowflake,
      title: "Geladeiras",
      description: "Conserto de todos os modelos e marcas de geladeiras residenciais e comerciais.",
      items: ["Frost Free", "Duplex", "Side by Side", "Inverter"],
    },
    {
      icon: Thermometer,
      title: "Freezers",
      description: "Manutenção completa em freezers verticais e horizontais de qualquer marca.",
      items: ["Vertical", "Horizontal", "Comercial", "Industrial"],
    },
    {
      icon: Wrench,
      title: "Refrigeradores",
      description: "Reparo especializado em refrigeradores comerciais e expositores.",
      items: ["Expositores", "Balcões", "Vitrines", "Câmaras Frias"],
    },
    {
      icon: Zap,
      title: "Manutenção Preventiva",
      description: "Serviço de manutenção preventiva para evitar problemas futuros.",
      items: ["Limpeza", "Recarga de Gás", "Troca de Peças", "Revisão Geral"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="servicos" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Soluções Completas em{" "}
            <span className="text-gradient">Refrigeração</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trabalhamos com todas as marcas e modelos do mercado, 
            sempre utilizando peças originais e garantia de serviço.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 border border-border hover:border-primary/20"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                {service.description}
              </p>

              {/* Items */}
              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Hover accent */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary to-accent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
