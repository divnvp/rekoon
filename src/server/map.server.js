export async function getMap() {
  const response = await fetch("https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aa9f2cfe5c9cec244c907c53a36f61dc9136db03f48d5bbd7c9819ebdc4641443&amp;width=890&amp;height=400&amp;lang=ru_RU&amp;scroll=true")
  
  const map = response.text();

  return await map;
}