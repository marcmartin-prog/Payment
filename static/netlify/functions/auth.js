import OAuthClient, {config} from 'oauthclient'

// Instance of client
var oauthClient = new OAuthClient({
    clientId: 'ABTdwPOPZLDdxwtdKStugLTbDJVlBqOo3k8BcVhqLnhq40Z6xA',
    clientSecret: 'lFdYy2WICaz93xEQXPOYGiTwLfejkjcRp24JRwBW',
    environment: 'sandbox',                                // ‘sandbox’ or ‘production’
    redirectUri: 'https://qbopaypage.netlify.app/netlify/functions/auth'
});

// AuthorizationUri
var authUri = oauthClient.authorizeUri({scope:[OAuthClient.scopes.Accounting,OAuthClient.scopes.Payment,OAuthClient.scopes.OpenId],state:'testState'}); 

// Redirect the authUri
res.redirect(authUri);