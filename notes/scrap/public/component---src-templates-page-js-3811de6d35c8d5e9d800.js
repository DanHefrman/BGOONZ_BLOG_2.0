(window.webpackJsonp = window.webpackJsonp || []).push([
    [9],
    {
        sweJ: function (e, t, a) {
            'use strict';
            a.r(t),
                a.d(t, 'default', function () {
                    return c;
                });
            var n = a('dI71'),
                r = a('mwIZ'),
                s = a.n(r),
                l = a('q1tI'),
                o = a.n(l),
                i = a('Kvkj'),
                p = a('7Qib'),
                c = (function (e) {
                    function t() {
                        return e.apply(this, arguments) || this;
                    }
                    return (
                        Object(n.a)(t, e),
                        (t.prototype.render = function () {
                            return o.a.createElement(
                                i.a,
                                this.props,
                                o.a.createElement(
                                    'article',
                                    { className: 'post post-full' },
                                    o.a.createElement(
                                        'header',
                                        { className: 'post-header has-gradient outer' },
                                        s()(this.props, 'pageContext.frontmatter.image', null) &&
                                            o.a.createElement('div', {
                                                className: 'bg-img',
                                                style: Object(p.i)(
                                                    "background-image: url('" + Object(p.j)(s()(this.props, 'pageContext.frontmatter.image', null)) + "')"
                                                )
                                            }),
                                        o.a.createElement(
                                            'div',
                                            { className: 'inner-sm' },
                                            o.a.createElement('h1', { className: 'post-title' }, s()(this.props, 'pageContext.frontmatter.title', null)),
                                            s()(this.props, 'pageContext.frontmatter.subtitle', null) &&
                                                o.a.createElement(
                                                    'div',
                                                    { className: 'post-subtitle' },
                                                    Object(p.f)(s()(this.props, 'pageContext.frontmatter.subtitle', null))
                                                )
                                        )
                                    ),
                                    o.a.createElement(
                                        'div',
                                        { className: 'inner-md outer' },
                                        o.a.createElement('div', { className: 'post-content' }, Object(p.f)(s()(this.props, 'pageContext.html', null)))
                                    )
                                )
                            );
                        }),
                        t
                    );
                })(o.a.Component);
        }
    }
]);
//# sourceMappingURL=component---src-templates-page-js-3811de6d35c8d5e9d800.js.map
