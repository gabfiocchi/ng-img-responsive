# ng-img-responsive

## Imágenes responsive y/o retina.

**Sólo funciona en etiquetas img con el atributo ng-src. No olvidar agregar la directiva ngresponsive para que funcione.**
```javascript
<img ng-src="img/ionic.png" ngresponsive>
```

Se acepta el atributo ratio o responsive, ambos con valor booleano, o también se definir en el configProvider.
```javascript
<img ng-src="img/ionic.png" ratio="true" responsive="true" ngresponsive>

.config(function(ngImgResponsiveConfigProvider) {
    ngImgResponsiveConfigProvider.usePixelRatio(true);
    ngImgResponsiveConfigProvider.useResponsive(true);
}
```
Otras configuraciones que se pueden hacer en el configProvider:

```javascript
.config(function(ngImgResponsiveConfigProvider) {
    ngImgResponsiveConfigProvider.usePixelRatio(true);
    ngImgResponsiveConfigProvider.useResponsive(true);
    ...
```
Limitar el pixel ratio, (@2x o @3x), acepta el valor en número entero.
```javascript
    ...
    ngImgResponsiveConfigProvider.setLimitPixelRatio(2);
    ...
```
   Es necesario definir los distintos tamaños de imágenes que se tienen:
```javascript
...
    ngImgResponsiveConfigProvider.setImage.thumbnail('160:90');
    ngImgResponsiveConfigProvider.setImage.small('320:180');
    ngImgResponsiveConfigProvider.setImage.medium('640:360');
    ngImgResponsiveConfigProvider.setImage.large('1280:720');
    ngImgResponsiveConfigProvider.setImage.extraLarge('1920:1080');
 }
 ```
 En caso de que falte un tamaño, tomará el valor siguiente.



