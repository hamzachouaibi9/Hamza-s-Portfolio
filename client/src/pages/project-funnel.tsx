import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Check, Star, Calendar, DollarSign, Globe, Smartphone, Database, Cloud } from 'lucide-react';
import { Link } from 'wouter';

interface ProjectData {
  // Step 1: Contact Info
  name: string;
  email: string;
  company: string;
  phone: string;
  
  // Step 2: Project Type
  projectType: string;
  
  // Step 3: Budget & Timeline
  budget: string;
  timeline: string;
  
  // Step 4: Project Details
  description: string;
  features: string[];
  
  // Step 5: Additional Info
  inspiration: string;
  additionalInfo: string;
}

const initialData: ProjectData = {
  name: '',
  email: '',
  company: '',
  phone: '',
  projectType: '',
  budget: '',
  timeline: '',
  description: '',
  features: [],
  inspiration: '',
  additionalInfo: ''
};

export default function ProjectFunnel() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<ProjectData>(initialData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 5;

  const updateFormData = (field: keyof ProjectData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      const response = await fetch('/api/project-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Failed to submit project inquiry:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const projectTypes = [
    { id: 'website', title: 'Business Website', icon: Globe, desc: 'Professional website for your business' },
    { id: 'ecommerce', title: 'E-Commerce Store', icon: Star, desc: 'Online store with payment processing' },
    { id: 'webapp', title: 'Web Application', icon: Database, desc: 'Custom web application with complex features' },
    { id: 'mobile', title: 'Mobile App', icon: Smartphone, desc: 'Native or cross-platform mobile application' },
    { id: 'saas', title: 'SaaS Platform', icon: Cloud, desc: 'Software as a Service platform' },
    { id: 'other', title: 'Other', icon: Star, desc: 'Tell us about your unique project' }
  ];

  const budgetRanges = [
    '$5,000 - $10,000',
    '$10,000 - $25,000', 
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+'
  ];

  const timelineOptions = [
    '1-2 months',
    '2-3 months',
    '3-6 months',
    '6+ months',
    'Flexible'
  ];

  const availableFeatures = [
    'User Authentication',
    'Payment Processing',
    'Admin Dashboard',
    'API Integration',
    'Mobile Responsive',
    'SEO Optimization',
    'Analytics',
    'Email Marketing',
    'Social Media Integration',
    'Multi-language Support',
    'Database Management',
    'Cloud Hosting'
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
        {/* Starry Background */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={`success-star-${i}`}
              className="absolute bg-white rounded-full"
              style={{
                width: `${Math.random() * 2 + 0.5}px`,
                height: `${Math.random() * 2 + 0.5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 4,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          >
            <div className="w-20 h-20 bg-green-500/20 border border-green-500/40 rounded-full flex items-center justify-center mx-auto mb-8">
              <Check className="w-10 h-10 text-green-400" />
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl font-light text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Thank You!
          </motion.h1>

          <motion.p
            className="text-white/70 text-lg mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Your project inquiry has been submitted successfully. I'll review your requirements and get back to you within 24 hours with a personalized proposal.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Link href="/">
              <motion.button
                className="bg-white/10 border border-white/20 text-white px-8 py-4 font-light tracking-wide uppercase transition-all duration-300 hover:bg-white/20"
                style={{ borderRadius: '2px' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Back to Portfolio
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Starry Background */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={`funnel-star-${i}`}
            className="absolute bg-white rounded-full"
            style={{
              width: `${Math.random() * 2 + 0.5}px`,
              height: `${Math.random() * 2 + 0.5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/">
            <motion.button
              className="text-white/60 hover:text-white/80 mb-8 flex items-center mx-auto transition-colors"
              whileHover={{ x: -5 }}
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Back to Portfolio
            </motion.button>
          </Link>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Let's Build Something Amazing
          </motion.h1>
          
          <motion.p
            className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Tell me about your project and I'll create a custom solution that exceeds your expectations.
          </motion.p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-2xl mx-auto mb-8 sm:mb-12 px-4">
          <div className="flex items-center justify-between mb-4">
            {[...Array(totalSteps)].map((_, i) => (
              <div key={i} className="flex items-center">
                <motion.div
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 flex items-center justify-center text-xs sm:text-sm font-light transition-all duration-300 ${
                    i + 1 <= currentStep 
                      ? 'bg-white/20 border-white/40 text-white' 
                      : 'border-white/20 text-white/40'
                  }`}
                  animate={{ 
                    scale: i + 1 === currentStep ? 1.1 : 1,
                    backgroundColor: i + 1 <= currentStep ? "rgba(255,255,255,0.2)" : "transparent"
                  }}
                >
                  {i + 1 < currentStep ? <Check className="w-4 h-4 sm:w-5 sm:h-5" /> : i + 1}
                </motion.div>
                {i < totalSteps - 1 && (
                  <div className={`w-6 sm:w-12 h-0.5 mx-1 sm:mx-2 transition-all duration-300 ${
                    i + 1 < currentStep ? 'bg-white/40' : 'bg-white/20'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="text-center text-white/60 text-xs sm:text-sm">
            Step {currentStep} of {totalSteps}
          </div>
        </div>

        {/* Form Steps */}
        <div className="max-w-2xl mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 border border-white/10 p-4 sm:p-6 md:p-8 lg:p-12"
              style={{ borderRadius: '2px' }}
            >
              {/* Step 1: Contact Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h2 className="text-xl sm:text-2xl font-light text-white mb-6 sm:mb-8">Contact Information</h2>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/70 text-sm mb-2">Full Name *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => updateFormData('name', e.target.value)}
                        className="w-full bg-white/5 border border-white/20 p-3 text-white placeholder-white/40 focus:border-white/40 focus:outline-none"
                        style={{ borderRadius: '2px' }}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white/70 text-sm mb-2">Email Address *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateFormData('email', e.target.value)}
                        className="w-full bg-white/5 border border-white/20 p-3 text-white placeholder-white/40 focus:border-white/40 focus:outline-none"
                        style={{ borderRadius: '2px' }}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/70 text-sm mb-2">Company/Organization</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => updateFormData('company', e.target.value)}
                        className="w-full bg-white/5 border border-white/20 p-3 text-white placeholder-white/40 focus:border-white/40 focus:outline-none"
                        style={{ borderRadius: '2px' }}
                        placeholder="Company name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white/70 text-sm mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateFormData('phone', e.target.value)}
                        className="w-full bg-white/5 border border-white/20 p-3 text-white placeholder-white/40 focus:border-white/40 focus:outline-none"
                        style={{ borderRadius: '2px' }}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Project Type */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-xl sm:text-2xl font-light text-white mb-6 sm:mb-8">What type of project do you need?</h2>
                  
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    {projectTypes.map((type) => {
                      const Icon = type.icon;
                      return (
                        <motion.button
                          key={type.id}
                          onClick={() => updateFormData('projectType', type.id)}
                          className={`p-4 sm:p-6 text-left border-2 transition-all duration-300 ${
                            formData.projectType === type.id
                              ? 'bg-white/10 border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                              : 'bg-white/5 border-white/20 hover:bg-white/10 hover:border-white/30'
                          }`}
                          style={{ borderRadius: '2px' }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white/60 mb-2 sm:mb-3" />
                          <h3 className="text-white font-light mb-1 sm:mb-2 text-sm sm:text-base">{type.title}</h3>
                          <p className="text-white/60 text-xs sm:text-sm">{type.desc}</p>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 3: Budget & Timeline */}
              {currentStep === 3 && (
                <div className="space-y-6 sm:space-y-8">
                  <h2 className="text-xl sm:text-2xl font-light text-white mb-6 sm:mb-8">Budget & Timeline</h2>
                  
                  <div>
                    <label className="block text-white/70 text-sm mb-4">What's your budget range?</label>
                    <div className="space-y-3">
                      {budgetRanges.map((range) => (
                        <motion.button
                          key={range}
                          onClick={() => updateFormData('budget', range)}
                          className={`w-full p-3 sm:p-4 text-left border-2 transition-all duration-300 ${
                            formData.budget === range
                              ? 'bg-white/10 border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                              : 'bg-white/5 border-white/20 hover:bg-white/10 hover:border-white/30'
                          }`}
                          style={{ borderRadius: '2px' }}
                          whileHover={{ x: 5 }}
                        >
                          <div className="flex items-center">
                            <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-white/60 mr-2 sm:mr-3" />
                            <span className="text-white text-sm sm:text-base">{range}</span>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/70 text-sm mb-4">When do you need this completed?</label>
                    <div className="space-y-3">
                      {timelineOptions.map((timeline) => (
                        <motion.button
                          key={timeline}
                          onClick={() => updateFormData('timeline', timeline)}
                          className={`w-full p-3 sm:p-4 text-left border-2 transition-all duration-300 ${
                            formData.timeline === timeline
                              ? 'bg-white/10 border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                              : 'bg-white/5 border-white/20 hover:bg-white/10 hover:border-white/30'
                          }`}
                          style={{ borderRadius: '2px' }}
                          whileHover={{ x: 5 }}
                        >
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white/60 mr-2 sm:mr-3" />
                            <span className="text-white text-sm sm:text-base">{timeline}</span>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Project Details */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-light text-white mb-8">Project Details</h2>
                  
                  <div>
                    <label className="block text-white/70 text-sm mb-2">Describe your project *</label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => updateFormData('description', e.target.value)}
                      rows={4}
                      className="w-full bg-white/5 border border-white/20 p-3 text-white placeholder-white/40 focus:border-white/40 focus:outline-none resize-none"
                      style={{ borderRadius: '2px' }}
                      placeholder="Tell me about your project, goals, and any specific requirements..."
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-white/70 text-sm mb-4">What features do you need? (Select all that apply)</label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {availableFeatures.map((feature) => (
                        <motion.button
                          key={feature}
                          onClick={() => {
                            const currentFeatures = formData.features;
                            const newFeatures = currentFeatures.includes(feature)
                              ? currentFeatures.filter(f => f !== feature)
                              : [...currentFeatures, feature];
                            updateFormData('features', newFeatures);
                          }}
                          className={`p-3 text-left border transition-all duration-300 ${
                            formData.features.includes(feature)
                              ? 'bg-white/10 border-white/40'
                              : 'bg-white/5 border-white/20 hover:bg-white/10'
                          }`}
                          style={{ borderRadius: '2px' }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-center">
                            {formData.features.includes(feature) && (
                              <Check className="w-4 h-4 text-white/60 mr-3" />
                            )}
                            <span className="text-white text-sm">{feature}</span>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Additional Information */}
              {currentStep === 5 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-light text-white mb-8">Additional Information</h2>
                  
                  <div>
                    <label className="block text-white/70 text-sm mb-2">Any websites or designs that inspire you?</label>
                    <input
                      type="url"
                      value={formData.inspiration}
                      onChange={(e) => updateFormData('inspiration', e.target.value)}
                      className="w-full bg-white/5 border border-white/20 p-3 text-white placeholder-white/40 focus:border-white/40 focus:outline-none"
                      style={{ borderRadius: '2px' }}
                      placeholder="https://example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-white/70 text-sm mb-2">Anything else you'd like me to know?</label>
                    <textarea
                      value={formData.additionalInfo}
                      onChange={(e) => updateFormData('additionalInfo', e.target.value)}
                      rows={4}
                      className="w-full bg-white/5 border border-white/20 p-3 text-white placeholder-white/40 focus:border-white/40 focus:outline-none resize-none"
                      style={{ borderRadius: '2px' }}
                      placeholder="Any specific requirements, preferences, or questions..."
                    />
                  </div>

                  <div className="bg-white/5 border border-white/20 p-6" style={{ borderRadius: '2px' }}>
                    <h3 className="text-white font-light mb-4">What happens next?</h3>
                    <div className="space-y-3 text-white/70 text-sm">
                      <div className="flex items-start">
                        <div className="w-6 h-6 bg-white/10 border border-white/20 rounded-full flex items-center justify-center mr-3 mt-0.5 text-xs">1</div>
                        <p>I'll review your project details within 24 hours</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-6 h-6 bg-white/10 border border-white/20 rounded-full flex items-center justify-center mr-3 mt-0.5 text-xs">2</div>
                        <p>We'll schedule a free consultation call</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-6 h-6 bg-white/10 border border-white/20 rounded-full flex items-center justify-center mr-3 mt-0.5 text-xs">3</div>
                        <p>I'll provide a detailed proposal and timeline</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-12">
                <motion.button
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`flex items-center px-6 py-3 border transition-all duration-300 ${
                    currentStep === 1
                      ? 'text-white/40 border-white/20 cursor-not-allowed'
                      : 'text-white border-white/40 hover:bg-white/10'
                  }`}
                  style={{ borderRadius: '2px' }}
                  whileHover={currentStep > 1 ? { x: -5 } : {}}
                >
                  <ChevronLeft className="w-5 h-5 mr-2" />
                  Previous
                </motion.button>

                {currentStep < totalSteps ? (
                  <motion.button
                    onClick={nextStep}
                    disabled={
                      (currentStep === 1 && (!formData.name || !formData.email)) ||
                      (currentStep === 2 && !formData.projectType) ||
                      (currentStep === 3 && (!formData.budget || !formData.timeline)) ||
                      (currentStep === 4 && !formData.description)
                    }
                    className={`flex items-center px-6 py-3 border transition-all duration-300 ${
                      (currentStep === 1 && (!formData.name || !formData.email)) ||
                      (currentStep === 2 && !formData.projectType) ||
                      (currentStep === 3 && (!formData.budget || !formData.timeline)) ||
                      (currentStep === 4 && !formData.description)
                        ? 'text-white/40 border-white/20 cursor-not-allowed'
                        : 'text-white border-white/40 hover:bg-white/10'
                    }`}
                    style={{ borderRadius: '2px' }}
                    whileHover={{ x: 5 }}
                  >
                    Next
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </motion.button>
                ) : (
                  <motion.button
                    onClick={handleSubmit}
                    disabled={isSubmitting || !formData.description}
                    className={`flex items-center px-8 py-3 border transition-all duration-300 ${
                      isSubmitting || !formData.description
                        ? 'text-white/40 border-white/20 cursor-not-allowed'
                        : 'text-white border-white/40 hover:bg-white/10'
                    }`}
                    style={{ borderRadius: '2px' }}
                    whileHover={!isSubmitting && formData.description ? { scale: 1.05 } : {}}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Project'}
                  </motion.button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}