# Getting Started

This page demonstrates some of the built-in markdown extensions provided by VitePress.

<version-badge package="@yiitap/vue" />

## Installation

:::tabs
== Vue
```shell
# npm
npm -i @yiitap/vue

# yarn
yarn add @yiitap/vue

# pnpm
pnpm add @yiitap/vue
```
== React
```shell
# npm
npm -i @yiitap/react

# yarn
yarn add @yiitap/react

# pnpm
pnpm add @yiitap/react
```
:::

## Usage

After installing, import [YiiEditor]() in your app.

:::tabs
== Vue
```vue
<template>
  <YiiEditor ref="yiiEditor" v-bind="options" @update="onUpdate" />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { YiiEditor } from '@yiitap/vue';
import '@yiitap/vue/dist/vue.css';

const yiiEditor = ref<InstanceType<typeof YiiEditor>>();

const options = computed(() => {
  return {
    content: '',
    showMainMenu: false,
    showBubbleMenu: true,
    showSideMenu: true,
    pageView: 'page',
  }
})

function onUpdate({ json, html }: { json: any; html: string }) {
  console.log('update', json)
  console.log('update', html);
}
</script>
```
== React
```jsx typescript
import { useState } from 'react'
import { YiiEditor } from '@yiitap/react'
import '@yiitap/react/dist/vue.css'

function App() {
  return (
    <>
      <YiiEditor />
    </>
  )
}

export default App
```
:::

## More

Check out the documentation for the [YiiEditor]() and [full list of editor extensions](https://vitepress.dev/guide/markdown).
