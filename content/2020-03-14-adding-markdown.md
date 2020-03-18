---
subject: Engineering daily log March 14th 2020
title: Engineering daily log March 14th 2020
---

# Engineering daily log March 14th 2020

## Creating an engineering daily log

I've been inspired with the entry in Pragmatic Programmer on an engineering day book. It got me searching around, and I saw that a few people had some daily entry type blogs. While something like this doesn't totally capture the spirit of the Pragmatic Programmer's view (they suggest an analog notebook), I think this is a neat idea.

The idea is that each day I'll create one of these entries where I talk about what I worked on for the day. I'll keep out any trade secrets and the like so I don't get in trouble. But I will mention what kind of engineering challenges I ran into for the day, and how I solved them. It may also go into some soft skills since a large portion of my day is devoted to that. So without further ado

## Adding markdown support for my nuxt app

[A quick google search brought me back this very helpful blog post.]("https://regenrek.com/posts/create-a-frontmatter-markdown-powered-blog-with-nuxt.js/") It goes through setting up Nuxt to handle markdown support, which this is written in. Everything was straight forward until the end. The author mentions to create an async function to use in the config, which requires changing doing an async export instead. The author just failed to mention that when you create a signature that looks like this

```js
export default async () => {};
```

Break

```c#
namespace MyApplication
{
    [Obsolete("...")]
    class Program : IInterface
    {
        public static List<int> JustDoIt(int count)
        {
            Console.WriteLine($"Hello {Name}!");
            return new List<int>(new int[] { 1, 2, 3 })
        }
    }
}
```

Then inside the body you need to return the new object explicitly with a `return` statement.
