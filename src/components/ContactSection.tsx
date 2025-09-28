import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle, CheckCircle, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // EmailJS Configuration
  const SERVICE_ID = 'service_0orgni6';
  const TEMPLATE_ID = 'template_vxfadme';
  const PUBLIC_KEY = 'sAdh56juqLUp6MY4v';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'Portfolio Contact',
        message: formData.message,
        to_name: 'Joshua Herbert Japheth',
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      
      toast({
        title: "Message sent successfully! ✨",
        description: "Thank you for reaching out! I'll get back to you as soon as possible.",
      });

      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email send error:', error);
      toast({
        title: "Oops! Something went wrong 😅",
        description: "Please try again or contact me directly at joshuajapheth14@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "joshuajapheth14@gmail.com",
      href: "mailto:joshuajapheth14@gmail.com",
      description: "Best way to reach me"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 7994462227",
      href: "tel:+917994462227",
      description: "Available for calls"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Kochi, Kerala, India",
      href: null,
      description: "RSET Campus & Surrounding Areas"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      title: "GitHub",
      value: "stredevirad",
      href: "https://github.com/stredevirad/stredevirad.github.io",
      color: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "joshuaherbertjapheth",
      href: "https://www.linkedin.com/in/joshuaherbertjapheth/",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      {/* Enhanced Background with Glassmorphism */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5"></div>
      
      {/* Enhanced Background Elements with Glow */}
      <div className="absolute top-10 left-10 opacity-5 animate-float">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl"></div>
          <MessageCircle size={200} className="relative text-primary" />
        </div>
      </div>
      <div className="absolute bottom-10 right-10 opacity-5 animate-float" style={{ animationDelay: '2s' }}>
        <div className="relative">
          <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl"></div>
          <Send size={140} className="relative text-accent" />
        </div>
      </div>
      
      {/* Floating Contact Icons */}
      <div className="absolute top-1/4 right-1/4 opacity-10 animate-float" style={{ animationDelay: '4s' }}>
        <Mail size={40} className="text-primary-glow" />
      </div>
      <div className="absolute bottom-1/3 left-1/3 opacity-10 animate-float" style={{ animationDelay: '6s' }}>
        <Phone size={30} className="text-accent-glow" />
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate? Let's create something amazing together! 
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Enhanced Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl blur-xl opacity-30"></div>
              <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-gradient mb-4 flex items-center gap-2">
                  <MessageCircle size={24} className="text-primary" />
                  Let's Connect!
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm always excited to discuss new opportunities, collaborate on projects, 
                  or simply connect with fellow tech enthusiasts. Feel free to reach out!
                </p>
              </div>
            </div>

            {/* Enhanced Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="group card-elegant hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30">
                    <CardContent className="p-5">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className="absolute -inset-1 bg-primary/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="relative bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                            <IconComponent className="text-primary" size={20} />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors duration-300">{info.title}</h4>
                          {info.href ? (
                            <a 
                              href={info.href}
                              className="text-primary hover:text-primary-glow transition-colors duration-300 font-medium"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <span className="text-foreground font-medium">{info.value}</span>
                          )}
                          <p className="text-xs text-muted-foreground mt-1">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Enhanced Social Links */}
            <div className="relative">
              <h4 className="font-semibold mb-4 text-lg flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                Follow My Journey
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative overflow-hidden flex items-center gap-3 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                      title={`${social.title}: ${social.value}`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <IconComponent size={20} className="relative z-10 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                      <span className="relative z-10 text-sm font-medium group-hover:text-primary transition-colors duration-300">{social.title}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="lg:col-span-2">
            <Card className="group relative overflow-hidden card-elegant hover:shadow-2xl transition-all duration-500 border-border/50">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/2 via-transparent to-accent/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="relative">
                <CardTitle className="text-2xl font-bold text-gradient flex items-center gap-3">
                  <Send size={24} className="text-primary" />
                  Send Me a Message
                </CardTitle>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Fill out the form below and I'll get back to you as soon as possible. 
                  I typically respond within 24 hours! ⚡
                </p>
              </CardHeader>
              
              <CardContent className="relative">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-semibold text-foreground">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        disabled={isSubmitting}
                        className="bg-background/50 border-border/50 focus:border-primary/50 transition-all duration-300 hover:border-primary/30"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-semibold text-foreground">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        disabled={isSubmitting}
                        className="bg-background/50 border-border/50 focus:border-primary/50 transition-all duration-300 hover:border-primary/30"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-semibold text-foreground">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      disabled={isSubmitting}
                      className="bg-background/50 border-border/50 focus:border-primary/50 transition-all duration-300 hover:border-primary/30"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, collaboration idea, or just say hello! I'd love to hear from you. 😊"
                      rows={6}
                      required
                      disabled={isSubmitting}
                      className="bg-background/50 border-border/50 focus:border-primary/50 transition-all duration-300 hover:border-primary/30 resize-none"
                    />
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="hero-button group relative overflow-hidden flex-1 sm:flex-initial"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={16} className="mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} className="mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                          Send Message
                        </>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-glow/0 via-primary-glow/20 to-primary-glow/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    </Button>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle size={16} className="text-accent" />
                      <span>Powered by EmailJS</span>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;