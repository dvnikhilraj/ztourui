export const apiPaths = {
  basePath: 'https://uat.ztour-travel.ro',
  activities: {
    cityList: '/Activity/CityList',
  },
} as const;

// Type for the API paths
export type ApiPaths = typeof apiPaths;