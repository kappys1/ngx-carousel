# ngxCarousel

> An lightweight, touchable and responsive library to create a carousel for angular 2+

[![npm version](https://badge.fury.io/js/ngx-carousel-lib.svg)](https://badge.fury.io/js/ngx-carousel-lib) ![Angular2+](https://img.shields.io/badge/Angular_2+-passing-brightgreen.svg?style=flat) ![Angular2+](https://img.shields.io/badge/Angular_7-success-brightgreen.svg?style=flat) ![licence](https://img.shields.io/badge/licence-MIT-blue.svg?style=flat)



## Demo
> demos available [here](https://kappys1.github.io/ngx-carousel)

## Install
You can install the package from our npm package
```
 npm install --save ngx-carousel-lib
```


## Usage
First tou need to provide the CarouselModule to your desired Module 



```
import {CarouselModule} from "ngx-carousel-lib";

// In your App's module or Custom Module:
@NgModule({
    imports: [
       CarouselModule
    ] 
})
```

Now, you can use CarouselModule as follow:

```
<carousel-component >
    <div class="item-carousel">a</div>
    <div class="item-carousel">
        <div class="b">
            <img src="https://www.losminionsaldia.com/images/mas-minions/minion.png" />
        </div>
    </div>
    <div class="item-carousel">c</div>
    <div class="item-carousel">d</div>
</carousel-component>
```

**All slides of carousel must have ``.item-carousel``**


#### [Preview](https://codesandbox.io/s/nw2j72v400)

## API Documentation
#### you can see [here](https://github.com/kappys1/ngx-carousel/wiki/API-Documentation) or in [web](https://kappys1.github.io/ngx-carousel)

### Author
Alex Marcos Gutierrez

### License
MIT
