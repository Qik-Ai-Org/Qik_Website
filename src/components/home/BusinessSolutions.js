import React from "react";

// Products to tag as ALPHA when alphaMode is enabled
const ALPHA_PRODUCTS = new Set([
  // Previously alpha products
  "Qik AllVoices",
  "Qik DragonDrip",
  "Qik Forms",
  "Qik Surveys",
  "Qik Email Validator",
  "Qik Feature Maestro",
  // Newly shifted entire categories (Human Capital, Marketing, Operations, Engagement)
  "Qik OnboardFlow",
  "Qik OKR & Goals",
  "NexusPost",
  "Qik AssetGrid",
  "Qik BookIt",
]);

// Products that should display NO badge (GA / fully released)
const NO_BADGE_PRODUCTS = new Set([
  "Qik Sign", // explicitly requested to not show Beta/Alpha tag
]);

const Badge = ({ kind }) => {
  const isAlpha = kind === 'ALPHA';
  return (
    <span
      style={{
        position: 'absolute',
        top: 8,
        right: 8,
        background: isAlpha
          ? 'linear-gradient(135deg,#FF7A59 0%,#FF3D81 100%)'
          : 'linear-gradient(135deg,#94A3FF 0%,#4F46E5 100%)',
        color: '#fff',
        fontSize: 11,
        padding: '6px 9px',
        fontWeight: 800,
        letterSpacing: '.5px',
        borderRadius: 999,
        boxShadow: '0 6px 14px rgba(0,0,0,.12)',
        zIndex: 5,
      }}
      title={isAlpha ? 'Alpha product' : 'Beta product'}
    >
      {kind}
    </span>
  );
};

const Card = ({ title, img, children, alphaMode }) => {
  // Show no badge for products explicitly excluded; otherwise ALPHA if in list else BETA
  const showBadge = !NO_BADGE_PRODUCTS.has(title);
  const badgeKind = ALPHA_PRODUCTS.has(title) ? 'ALPHA' : 'BETA';
  return (
    <div className="col-md-4 col-sm-6 col-12 business-card-animate">
      <div className="feature-item business-product enhanced-card" style={{ position: 'relative' }}>
        {showBadge && <Badge kind={badgeKind} />}
        <img src={img} alt={`${title} icon`} className="business-card-img" />
        <div className="business-card-content">
          <strong>{title}</strong>
          <p>{children}</p>
        </div>
      </div>
    </div>
  );
};

const BusinessSolutions = ({ alphaMode = false }) => (
  <div id="sub-business-solutions">
    <div className="col-md-12" id="products" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      {/* Compliance & Risk Management */}
      <div className="row" style={{ display: 'flex', flexWrap: 'wrap', gap: '32px 0' }}>
        <div className="col-md-12" style={{ marginBottom: "20px" }}>
          <h6 style={{ color: "#00abf6", fontWeight: "bold", marginBottom: "15px" }}>
            Compliance, Legal & Risk Management
          </h6>
        </div>
        <Card alphaMode={alphaMode} img="./images/logos/Qik Sign.png" title="Qik Sign">
          Secure E-Signature Platform: Legally binding digital signatures with audit trails & workflow automation
        </Card>
        <Card alphaMode={alphaMode} img="./images/logos/Qik Policy Management Portal.PNG" title="Qik Policy Management Portal">
          Centralized policy creation, management, and compliance tracking
        </Card>
        <Card alphaMode={alphaMode} img="./images/logos/Qik Whistleblower.PNG" title="Qik Whistleblower">
          Anonymous reporting and incident management system
        </Card>
        <Card alphaMode={alphaMode} img="./images/logos/Qik RetainRight.PNG" title="Qik RetainRight">
          Document Retention & Auto-Purge Scheduler: Automated compliance for data retention policies
        </Card>
        <Card alphaMode={alphaMode} img="./images/logos/LegaDraft.PNG" title="Qik LegaDraft">
          AI-Powered Legal Document Assistant: AI-driven legal document creation and review
        </Card>
        <Card alphaMode={alphaMode} img="./images/logos/Qik CLM.png" title="Qik CLM">
          Contract Lifecycle Management: End-to-end contract drafting, collaboration, approvals, renewals & AI clause analysis
        </Card>
      </div>

  {alphaMode && (
        <div className="row" style={{ display: 'flex', flexWrap: 'wrap', gap: '32px 0' }}>
          <div className="col-md-12" style={{ marginBottom: "20px" }}>
            <h6 style={{ color: "#00abf6", fontWeight: "bold", marginBottom: "15px" }}>
              Human Capital & Performance
            </h6>
          </div>
          <Card alphaMode={alphaMode} img="./images/logos/Qik OnboardFlow.PNG" title="Qik OnboardFlow">
            Employee Onboarding and Off-boarding: Streamlined employee lifecycle management
          </Card>
          <Card alphaMode={alphaMode} img="./images/logos/Qik OKR & Goals.PNG" title="Qik OKR & Goals">
            Objective and key results tracking and performance management
          </Card>
          <Card alphaMode={alphaMode} img="./images/logos/Qik AllVoices.PNG" title="Qik AllVoices">
            Employee voice and feedback collection platform
          </Card>
        </div>
      )}

      {alphaMode && (
        <div className="row" style={{ display: 'flex', flexWrap: 'wrap', gap: '32px 0' }}>
          <div className="col-md-12" style={{ marginBottom: "20px" }}>
            <h6 style={{ color: "#00abf6", fontWeight: "bold", marginBottom: "15px" }}>
              Marketing, Communications & Engagement
            </h6>
          </div>
          <Card alphaMode={alphaMode} img="./images/logos/Qik DragonDrip.PNG" title="Qik DragonDrip">
            Email Campaign Builder: Marketing automation and email campaign management
          </Card>
            <Card alphaMode={alphaMode} img="./images/logos/NexusPost.PNG" title="NexusPost">
            Social Media Management
          </Card>
          <Card alphaMode={alphaMode} img="./images/logos/Qik Forms.PNG" title="Qik Forms">
            Dynamic form builder and data collection
          </Card>
          <Card alphaMode={alphaMode} img="./images/logos/Qik Surveys.PNG" title="Qik Surveys">
            Survey creation and data collection tools
          </Card>
          <Card alphaMode={alphaMode} img="./images/logos/Qik Email Validator.PNG" title="Qik Email Validator">
            Email verification
          </Card>
        </div>
      )}

      {alphaMode && (
        <div className="row" style={{ display: 'flex', flexWrap: 'wrap', gap: '32px 0' }}>
          <div className="col-md-12" style={{ marginBottom: "20px" }}>
            <h6 style={{ color: "#00abf6", fontWeight: "bold", marginBottom: "15px" }}>
              Product Management & Innovation
            </h6>
          </div>
          <Card alphaMode={alphaMode} img="./images/logos/Qik Feature Maestro.png" title="Qik Feature Maestro">
            SaaS Feature Request Board: Product development and feature request management
          </Card>
        </div>
      )}

      {alphaMode && (
        <div className="row" style={{ display: 'flex', flexWrap: 'wrap', gap: '32px 0' }}>
          <div className="col-md-12" style={{ marginBottom: "20px" }}>
            <h6 style={{ color: "#00abf6", fontWeight: "bold", marginBottom: "15px" }}>
              Operations & Asset management
            </h6>
          </div>
          <Card alphaMode={alphaMode} img="./images/logos/Qik AssetGrid.PNG" title="Qik AssetGrid">
            Company Asset Tracker: Comprehensive asset inventory and management system
          </Card>
          <Card alphaMode={alphaMode} img="./images/logos/Qik BookIt.PNG" title="Qik BookIt">
            Resource booking and reservation management system
          </Card>
        </div>
      )}

      {alphaMode && (
        <div className="row" style={{ display: 'flex', flexWrap: 'wrap', gap: '32px 0' }}>
          <div className="col-md-12" style={{ marginBottom: "20px" }}>
            <h6 style={{ color: "#00abf6", fontWeight: "bold", marginBottom: "15px" }}>
              Engagement & Communication
            </h6>
          </div>
        </div>
      )}
    </div>
  </div>
);

export default BusinessSolutions;
