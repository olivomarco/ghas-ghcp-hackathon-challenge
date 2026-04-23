// =============================================================================
// ⚠️  EXAMPLE CONFIGURATION — DO NOT USE IN PRODUCTION
// =============================================================================
// This file contains FAKE credentials that look realistic. They are here
// intentionally so that GitHub Secret Scanning can detect them during the
// hackathon exercises.
//
// In a real project, secrets should NEVER be committed to source control.
// Use environment variables, secret managers (AWS Secrets Manager, Azure
// Key Vault, HashiCorp Vault), or GitHub Actions secrets instead.
// =============================================================================

const config = {
  // ---------------------------------------------------------------------------
  // Database Configuration
  // ---------------------------------------------------------------------------
  database: {
    host: "prod-db-server.internal.example.com",
    port: 5432,
    name: "juiceshop_production",
    username: "admin",
    // 🔴 SECRET SCANNING SHOULD FLAG THIS
    // Hardcoded database passwords are a critical security risk
    password: "Super$ecretP@ssw0rd!2024",
  },

  // ---------------------------------------------------------------------------
  // AWS Configuration
  // ---------------------------------------------------------------------------
  aws: {
    region: "us-east-1",
    // 🔴 SECRET SCANNING SHOULD FLAG THESE
    // AWS keys grant access to cloud resources — leaked keys are one of the
    // most common causes of cloud security breaches
    accessKeyId: "AKIAIOSFODNN7EXAMPLE",
    secretAccessKey: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
    s3Bucket: "juiceshop-user-uploads",
  },

  // ---------------------------------------------------------------------------
  // GitHub Configuration
  // ---------------------------------------------------------------------------
  github: {
    // 🔴 SECRET SCANNING SHOULD FLAG THIS
    // GitHub personal access tokens can be used to access repos, create
    // commits, manage issues, and more — depending on scopes granted
    personalAccessToken: "ghp_ABCDEFGHIJKLMNOPQRSTUVWXYZabcdef12",
    webhookSecret: "whsec_aHR0cHM6Ly9leGFtcGxlLmNvbS93ZWJob29r",
  },

  // ---------------------------------------------------------------------------
  // JWT / Session Configuration
  // ---------------------------------------------------------------------------
  auth: {
    // 🔴 SECRET SCANNING SHOULD FLAG THIS
    // JWT secrets are used to sign authentication tokens — if leaked,
    // an attacker can forge valid sessions for any user
    jwtSecret: "your-256-bit-secret-key-here-do-not-share",
    sessionSecret: "keyboard-cat-super-secret-session-key",
    tokenExpiry: "24h",
  },

  // ---------------------------------------------------------------------------
  // Third-Party API Keys
  // ---------------------------------------------------------------------------
  apis: {
    // 🔴 These patterns may be detected by secret scanning
    sendgridApiKey: "SG.EXAMPLE_KEY.abcdefghijklmnopqrstuvwxyz123456",
    stripeSecretKey: "<your_stripe_sk_live_key_here>",
    twilioAccountSid: "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    twilioAuthToken: "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4",
  },

  // ---------------------------------------------------------------------------
  // OAuth Configuration
  // ---------------------------------------------------------------------------
  oauth: {
    google: {
      clientId: "123456789-abcdefg.apps.googleusercontent.com",
      clientSecret: "GOCSPX-abcdefghijklmnopqrstuvwx",
    },
  },
};

module.exports = config;
