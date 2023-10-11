interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Team Member', 'End Customer', 'Customer Service Representative', 'Sales Manager'],
  tenantName: 'Team',
  applicationName: 'FirstApp',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage user information',
    'Manage team information',
    'Create and manage tenant information',
    'Manage the relationship between user and team',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/b19f21ac-61ed-4bbb-a974-2e4f19a830dd',
};
