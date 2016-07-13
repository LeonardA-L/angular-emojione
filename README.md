# angular-emojione

Directive and Filter to easily integrate ![emojione](http://emojione.com/) emojis into your AngularJS app.

-----------

## Install

Install via bower

```
bower install angular-emojione
```

Add the module as dependency to your app module

```
'angular-emojione'
```


## Usages

Both directive and filter use ![.toImage](http://git.emojione.com/demos/jstoimage.html) to render a String into an HTML element.

You can use the filter with

```
<p ng-bind-html="'Hello :smile:'|emojione"></p>
<p ng-bind-html="content | emojione"></p>
```

Use the directive with

```
<p emojione="{{content}}"></p>
<p emojione="Hello :smile:"></p>
<p emojione>Hello :smile:</p>
```

## Development

Although this work is pretty basic, all contributions and discussions are welcome. Open an issue / a pull request.

---------

I would like to thank everyone at emojione for helping us render emojis so easily :)
