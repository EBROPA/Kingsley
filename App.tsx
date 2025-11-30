import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PageView, Property, BlogPost } from './types';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PrivateAccess from './components/PrivateAccess';

// Home Sections
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import AboutSummary from './components/AboutSummary';
import FeaturedObject from './components/FeaturedObject';
import Collections from './components/Collections';
import Districts from './components/Districts';
import Services from './components/Services';
import Reviews from './components/Reviews';
import BlogPreview from './components/BlogPreview';

// Pages
import CollectionsPage from './components/pages/CollectionsPage';
import DistrictsPage from './components/pages/DistrictsPage';
import ServicesPage from './components/pages/ServicesPage';
import AboutPage from './components/pages/AboutPage';
import PropertyPage from './components/pages/PropertyPage';
import BlogPage from './components/pages/BlogPage';
import BlogPostPage from './components/pages/BlogPostPage';
import UserAgreementPage from './components/pages/UserAgreementPage';
import PrivacyPolicyPage from './components/pages/PrivacyPolicyPage';
import ConsentPage from './components/pages/ConsentPage';

function App() {
  const [currentView, setCurrentView] = useState<PageView>('home');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // CRITICAL FIX: Reset scroll position whenever the view changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [currentView]);

  const handlePropertySelect = (property: Property) => {
    setSelectedProperty(property);
    setCurrentView('property');
  };

  const handlePostSelect = (post: BlogPost) => {
    setSelectedPost(post);
    setCurrentView('blog-post');
  };

  const renderContent = () => {
    switch (currentView) {
      case 'collections':
        return <CollectionsPage onPropertySelect={handlePropertySelect} />;
      case 'districts':
        return <DistrictsPage />;
      case 'services':
        return <ServicesPage />;
      case 'about':
        return <AboutPage />;
      case 'blog':
        return <BlogPage onPostSelect={handlePostSelect} />;
      case 'blog-post':
        return selectedPost ? (
            <BlogPostPage post={selectedPost} onBack={() => setCurrentView('blog')} />
        ) : (
            <BlogPage onPostSelect={handlePostSelect} />
        );
      case 'property':
        return selectedProperty ? (
          <PropertyPage property={selectedProperty} onBack={() => setCurrentView('collections')} />
        ) : (
          <CollectionsPage onPropertySelect={handlePropertySelect} />
        );
      case 'user-agreement':
        return <UserAgreementPage onBack={setCurrentView} />;
      case 'privacy-policy':
        return <PrivacyPolicyPage onBack={setCurrentView} />;
      case 'consent':
        return <ConsentPage onBack={setCurrentView} />;
      default:
        return (
          <>
            <Hero onNavigate={setCurrentView} />
            <Manifesto />
            <AboutSummary onNavigate={setCurrentView} />
            <FeaturedObject onPropertySelect={handlePropertySelect} />
            <Collections onNavigate={setCurrentView} onPropertySelect={handlePropertySelect} />
            <Districts onNavigate={setCurrentView} />
            <Services onNavigate={setCurrentView} />
            <BlogPreview onNavigate={setCurrentView} onPostSelect={handlePostSelect} />
            <Reviews />
          </>
        );
    }
  };

  return (
    <div className="font-sans text-primary bg-background selection:bg-accent selection:text-white overflow-x-hidden w-full min-h-screen flex flex-col">
      <Navbar currentView={currentView} onNavigate={setCurrentView} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
        
        {/* Contact/Lead Form is available on all pages at the bottom */}
        <PrivateAccess />
      </main>

      <Footer onNavigate={setCurrentView} />
    </div>
  );
}

export default App;