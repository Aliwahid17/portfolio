---

author : Wahid Ali
postTitle: What things sveltekit offer better than other javascript frameworks?
focusKeyphrase: sveltekit javascript frameworks
datePublished: 2023-01-20T10:50:46.469Z
lastUpdated: 
seoMetaDescription: In between the chaos of javascript frameworks, I'm simply trying to put light on sveltekit unique features and the tradeoffs it brings.
featuredImage: what-things-sveltekit-offer-better-than-other-javascript-frameworks.webp
featuredImageAlt: Sveltekit framework official image
categories:  Framework
tags: svelte,sveltekit,fullstack,Javascript
readingTime : 5

---

<script lang='ts'>
    import TopImage from "$lib/components/content/TopImage.svelte"
    import Heading from "$lib/components/content/Heading.svelte"
    import SubHeading from "$lib/components/content/SubHeading.svelte"
    import Link from "$lib/components/content/Link.svelte"
    import Data from "$lib/components/content/Data.svelte"
    import Github from "$lib/components/content/Github.svelte"

    import BannerImage from "$lib/assets/content/what-things-sveltekit-offer-better-than-other-javascript-frameworks/Svelte-based-meta-framework-sveltekit.webp"
    import Javascript_meme from "$lib/assets/content/what-things-sveltekit-offer-better-than-other-javascript-frameworks/Javascript-meme.webp"
    import Svelte_so_hot from "$lib/assets/content/what-things-sveltekit-offer-better-than-other-javascript-frameworks/Svelte-so-hot.webp"
    import React_Virtual_Dom from "$lib/assets/content/what-things-sveltekit-offer-better-than-other-javascript-frameworks/React-virtual-dom.webp"
    import Svelte_Less_Code from "$lib/assets/content/what-things-sveltekit-offer-better-than-other-javascript-frameworks/Svelte-less-code.webp"
    import Svelte_Meme from "$lib/assets/content/what-things-sveltekit-offer-better-than-other-javascript-frameworks/Svelte-meme.webp"

</script>

<Heading heading={postTitle} date={datePublished} time={readingTime} latest={lastUpdated} tags={tags} />

<TopImage image={BannerImage} imageAlt={featuredImageAlt} load="eager" />

<Data>

Currently, becoming a web developer is a good and also terrifying time. The reason is having many complete solutions like Nextjs, Nuxtjs, Sveltekit, etc.

Now, web developers can develop a high-performing web app without so much banging their heads against the walls. Thanks to all meta frameworks creators.

As you know, more options mean more confusion. And the more you try to find the answer of which framework is best, the more you get confused by social media alpha programmers.

Because of these things, now javascript is not just a programming language. Instead, it became a war.  

So, it is your time to choose which gang you support and spend most time figuring out why my website is not working.

I'm just trying to show why you should at least once try sveltekit in the web development frameworks war.
</Data>

<TopImage image={Javascript_meme} imageAlt="Fun of javascript developers meme based on IT movie" load="lazy" />


<SubHeading subHeading="What Are Svelte And Sveltekit?" />

<Data>

Svelte is a front-end, open-source JavaScript framework for making interactive web pages. It is similar to other frameworks in the javascript world like React, Vue, etc. But the svelte approach of building web pages is different than other frameworks.

Which we will talk about later in the blog article.

Another hand, svelteKit is a framework for rapidly developing robust, performant web applications using svelte.

I don't want to bore you by explaining why we need sveltekit on top of svelte that information is already briefly explained in svelteKit docs.

Source : <Link source="https://kit.svelte.dev/docs/introduction" title="Sveltekit document" />

</Data>


<SubHeading subHeading="Why Are Svelte And Sveltekit On The Hype Train?" />

<TopImage image={Svelte_so_hot} imageAlt="Svelte Popularity meme" load="lazy" />

<Data>

The reason is simple sveltekit provides features like Nextjs, Nuxtjs, and others, but with less code, No virtual DOM, fast build/run times, Truly Reactive, and other features.

Let's break down these leading features that separate sveltekit from other frameworks. You don't think svelte has these features only despite having many tricks under its sleeve.

I'll tell you svelte disadvantages you need to be aware of them too.

Source : <Link source="https://www.bairesdev.com/blog/svelte-and-why-you-should-consider-it/" title="What is Svelte and Why You Should Consider it For Your Business?" />

</Data>

<SubHeading subHeading="No Virtual DOM" />

<TopImage image={React_Virtual_Dom} imageAlt="React Virtual Dom" load="lazy"  />

<Data>

In a nutshell, Virtual Dom is a way to update the state of your web app by comparing the snapshot of a previous tree of custom objects with the current one. This technique is used by many popular frameworks like react,vue, and meta frameworks like nextjs, nuxtjs, etc.

The main downside of virtual dom is that it runs before your actual written code run, which makes the web app slow, bulky, and adds another layer of abstraction. That cost performance issues, large app bundle size, and increase in build times.

On the other hand, svelte and its meta framework sveltekit don't face that problem because svelte is a compiler.

That means clients don't need to load any specific javascript code to run sveltekit in their browser. The client eventually loads vanilla javascript code in their browser to run your web app.

All your written code mainly compiles instead of comparing objects in virtual doms. This approach, not having to load the whole package in your project, significantly reduces the size of the bundle. It is more beneficial for mobile devices.

</Data>

<SubHeading subHeading="Less Code" />

<TopImage image={Svelte_Less_Code} imageAlt="Sveltekit Less Code" load="lazy" />

<Data>

Other frameworks and libraries come with a layer of abstraction. It means they introduce their own rules, syntax, and way of creating web apps. That is not bad because everyone has a different perspective on solving problems.

Eventually, our job as a programmer is to solve computer-related problems. But sometimes, problem-solving frameworks and libraries get far away from solving problems.

Instead, they make the simple task more complex, become hard to debug and introduce more boilerplate code, weird rules, weird syntax, and many more issues in the projects.

In the javascript frameworks war, sveltekit fights those issues and tries to stick to the vanilla javascript on steroid approach. That made sveltekit a beginner-friendly framework, and you can achieve the same as react, vue with 30% - 40% less code.

In svelte, it uses a script tag to write javascript and a style to write CSS. You don't need to get an element from dom and then manipulate it. Instead, you can use your variable directly in your HTML and svelte handle everything on compile time.

</Data>

<SubHeading subHeading="Truly Reactive" />

<TopImage image={Svelte_Meme} imageAlt="Sveltekit meme" load="lazy" />

<Data>

Svelte smartly updates the DOM at build time. That lets users build their applications according to their conditions without caring about unnecessary overhead.

It reduces client-side work that eventually shows a fast web app, and your website gets a better SEO ranking.

In other frameworks and libraries, you need to use hooks to change the state, which leads to more boilerplate and increases the work of the garbage collector.

Sveltekit reduces 65 character codes of Nextjs codes into 11 character codes.



</Data>

<SubHeading subHeading="What Are The Cons Of Svelte And Sveltekit?"  load="lazy" />

<Data>

Svelte smartly updates the DOM at build time. That lets users build their applications according to their conditions without caring about unnecessary overhead.

It reduces client-side work that eventually shows a fast web app, and your website gets a better SEO ranking.

In other frameworks and libraries, you need to use hooks to change the state, which leads to more boilerplate and increases the work of the garbage collector.

Sveltekit reduces 65 character codes of Nextjs codes into 11 character codes.

Source : <Link source="https://upmostly.com/svelte/what-are-the-cons-of-using-svelte" title="What Are the Cons of Using Svelte?" />

</Data>

<SubHeading subHeading="Svelte And Sveltekit Are Still Newborn" />

<Data>

According to the state of javascript 2022, svelte falls in the category of the most loved framework.

But svelte is still new in the javascript war compared to its other aliases like react, vue, etc. React was released in May 2013 by facebook, vue was released in February 2014 by Evan You, svelte was released in November 2016, and sveltekit in December 2022  by Rich Harris.

As you can see, other frameworks on the javascript war for a decade. That gives developers time to explore it in their side projects, and get a more precise fix of framework issues, etc.

Time helps the framework to build its community on the internet. Let us talk about that in the next point.

Source : <Link source="https://2022.stateofjs.com/en-US/libraries/" title="State Of Javascript survey 2022" />

</Data>

<SubHeading subHeading="A Small Community Of Svelte And Sveltekit" />

<Data>

The Svelte and sveltekit community is small again as compared to react,vue.

Community around framework or library help programmers like you and me to solve our problem fast and gets usable fix quickly etc.

There will be the chance you will get stuck on problems or bugs related to your written code, svelte compiler issues, etc. You will not be able to find the answer on StackOverflow or any other website because of its small community.

The majority of the svelte community is an English speaker. So, if your non-English speaker, then finding issues on the internet gets harder than for English speakers.

Source : <Link source="https://procoders.tech/blog/svelte-vs-vue-frameworks-comparison/" title="Svelte vs Vue: Top Front-End Frameworks Comparison" />

</Data>

<SubHeading subHeading="Fewer Packages Are Available For Svelte And Sveltekit" />

<Data>

As you know now, the svelte and sveltekit community is small, which eventually means you need to figure out many tasks by yourself because there will be a chance library for your purpose is not available in svelte.

For alpha experienced developers, it's not a big headache, but for beginners or someone who needs to finish some project quickly, it can become a pain for the developer.

You will not find many open-source library options for your task, so you have to count on yourself.


</Data>

<SubHeading subHeading="Conclusion" />

<Data>

In the javascript war, no framework is best. You have to find that by yourself by exploring different frameworks and then stick to one framework you most like in your exploring journey.

The more time you stick to one framework. The more you can able to solve web problems effectively and become able to give back to that framework community.

The framework does not matter how you will handle and use that framework in your projects matters.

<Github />

</Data>
