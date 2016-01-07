// es5, 6, and 7 polyfills, powered by babel
require("babel-polyfill")

//
// fetch method, returns es6 promises
// if you uncomment 'universal-utils' below, you can comment out this line
require("isomorphic-fetch")

// universal utils: cache, fetch, store, resource, fetcher, router, vdom, etc
import {m, mount, update, qs, rAF} from 'universal-utils'
import engine from 'vdom-slide-engine'

window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));

// the following line, if uncommented, will enable browserify to push
// a changed fn to you, with source maps (reverse map from compiled
// code line # to source code line #), in realtime via websockets
if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => {
        app()
    })
}

const prop = (val) =>
    (newVal) => {
        if(newVal !== undefined) val = newVal
        return val
    }

const md = md =>
    m('div', {config: (el) => {
        el.innerHTML = markdeep.format(md)
    }})

const frame = (_src) => {
    let src = prop(_src)

    if(_src.indexOf('.js') !== -1){
        let {origin,pathname} = window.location,
            url = `${origin}${pathname}${_src}`

        fetch(url)
            .then(r => r.text())
            .then(scriptText =>
                src(`https://matthiasak.github.io/arbiter-frame/#${escape(scriptText)}`))
            .then(() => update())
            .catch(e => console.error(e))
    }

    return () => m('iframe', {src: src()})
}

let home = () =>
    m('.home', [
        m('.hr', 'A look into'),
        m('h1', 'The State of the Union.js'),
        m('.hr', 'With this guy'),
        m('img', {style: {width: 'auto'}, src: 'https://pbs.twimg.com/profile_images/684599443908235264/IgNdjWUp.png'}),
        m('.hr', [
            m('a', {href:'http://mkeas.org/talks'}, 'mkeas.org/talks'),
            ' • ',
            m('a', {href:'http://twitter.com/matthiasak'}, '@matthiasak')
        ])
    ])

let recap = (bullets, title='Let\s Recap') =>
    m('div',
        m('.hr', title),
        m('ul', bullets.map(bullet => m('li', bullet)))
    )

const img = (url, title, style={}) =>
    m('div',
        title && m('.hr', title),
        m('img', {src: url, style}))

const tweet = id =>
    m('div',
        m('div', {config: (el, ...args) => {
            twttr.widgets.createTweet(id+'', el, {
                align: 'center'
            })
        }}))

import * as c from './content'

function app() {
    // start app
    let e = engine(),
        { slides, insert, remove, navigate, play } = e

    insert(
        home,
        img('https://www.theironyard.com/etc/designs/theironyard/icons/iron-yard-logo.svg', "Passion at the intersection of tech and education.", {width:'50%'}),
        md(`\n# Node by the Numbers\n\n---\n\nhttps://nodesource.com/assets/blog/node-by-numbers/node-by-numbers.pdf\n\n`),
        img('./images/30.png'),
        img('./images/31.png'),
        img('./images/32.png'),
        img('./images/33.png'),
        img('./images/34.png'),
        img('./images/35.png'),
        img('./images/36.png'),
        md(`\n# An overarching theme: kintsugi\n`),
        img('./images/kintsugi.jpg'),
        img('./images/2.png'),
        img('./images/3.png'),
        img('./images/5.png'),
        img('./images/7.png'),
        img('./images/8.png'),
        img('./images/9.png'),
        md(c.paradox),
        img('https://media.giphy.com/media/rAZEnOu0KHQK4/giphy.gif', '', {width:'100%'}),
        img('./images/10.png'),
        md(c.compilers),
        img('./images/11.png'),
        frame('https://goo.gl/RRLvm8'),
        img('./images/12.png'),
        md(c.fp),
        frame('https://goo.gl/tbhizV'),
        md(`\n# Thanks, V8!\n`),
        md(c.quote1),
        img('./images/13.png'),
        md(c.npm),
        img('./images/18.png'),
        img('./images/19.png'),
        md(c.contextless),
        img('./images/21.png'),
        img('./images/22.png'),
        img('./images/23.png'),
        md(`\n# A simple fetch()\n`),
        frame('https://goo.gl/gU8gk3'),
        md(`\n# A cancellable fetch()\n`),
        frame('https://goo.gl/gcfTJk'),
        md(`\n# A batchable fetch()\n`),
        frame('https://goo.gl/MZo6xb'),
        md(`\n# A cancellable-batchable fetch()\n`),
        frame('https://goo.gl/4gxYf8'),
        md(`\n# A multiplexed fetch()\n`),
        frame('https://goo.gl/sZsLrk'),
        md(c.quote2),
        md(c.lessons1),
        // HERE: look at fetch, cancellable, batch, mux
        m('div',
            m('h2', `It's a bit of a side quest`),
            tweet('657880905567096832')),
        md(`\n# "Dirtual Voms"\n`),
        md(`\n# JSX. Transpiled.\n`),
        frame('https://goo.gl/RROheS'),
        md(`\n# An example React element (VDOM object)\n`),
        frame('https://goo.gl/DNQDVJ'),
        md(`\n# It's a recursive object tree!\n`),
        frame('https://goo.gl/KjCmNK'),
        frame('https://goo.gl/HiKBJH'),
        img('./images/vdom.png'),
        img('./images/matt.png'),
        md(`\n# Redux and the Tyranny of "State"\n`),
        img('./images/20.png'),
        md(c.reduxWeaknesses),
        frame('https://goo.gl/g7jxbP'),
        frame('https://goo.gl/Z6oN9k'),
        md(`\n# Async actions\n\n---\n\n- middleware\n- thunks\n\n`),
        frame('https://goo.gl/5H69wc'),
        img('./images/28.png'),
        md(c.store),
        frame('https://goo.gl/meGXlP'),
        md(`\n# Have We lost faith in our own API design skills/needs?\n`),
        md(`\n# Channels, the new tacos.\n`),
        frame('https://goo.gl/AziEvr'),
        frame('https://goo.gl/6PdBln'),
        md(`\n# Transducers = transform + reduce\n`),
        frame('https://goo.gl/GnbP9M'),
        md(`\n ## "Ottomation" - Hashicorp's Revenge and the War for Automation \n`),
        md(c.otto),
        img('./images/kintsugi.jpg'),
        md(`\n# Thank You!\n`)
    )

    play()
}

twttr.ready(() => app())
