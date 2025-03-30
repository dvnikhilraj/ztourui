export const apiPaths = {
  basePath: 'http://AcitivityAPI.ztour-travel.ro',
  activities: {
    cityList: '/Activity/CityList',
    search : '/api/activity/Search'
  },
} as const;

export type ApiPaths = typeof apiPaths;