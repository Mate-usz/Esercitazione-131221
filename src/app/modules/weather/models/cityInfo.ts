export interface IPartialCityInfo{
  weather: Weather[],
  main: Main,
  name: string,
  sys: Sys,
  dt: string
}
export interface Sys{
  country: string
}
export interface Weather{
  description: string,
  icon: string
}
export interface Main{
  temp: number
}


export class CityInfo{
  protected constructor(
    public name = '',
    public temp = '',
    public state = '',
    public clouds = '',
    public date = new Date(),
    public icon = ''
  ){}

  public static Build(cityInfos: IPartialCityInfo){
    return new this(
      cityInfos.name,
      cityInfos.main.temp.toFixed(0),
      cityInfos.sys.country,
      cityInfos.weather[0].description,
      new Date(+cityInfos.dt*1000),
      `http://openweathermap.org/img/wn/${cityInfos.weather[0].icon}.png`
    );
  }
}
