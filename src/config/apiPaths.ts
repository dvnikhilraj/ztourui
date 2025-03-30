export const apiPaths = {
  basePath: 'http://AcitivityAPI.ztour-travel.ro',
  activities: {
    cityList: '/Activity/CityList',
    search : '/api/activity/Search'
  },
} as const;

// Type for the API paths
export type ApiPaths = typeof apiPaths;