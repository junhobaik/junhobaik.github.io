---
title: Markdown Test (CodeBlock)
date: 2018-01-16 22:54:00 +0900
tag:
  - test
  - markdwon
categories:
  - test
---


```django
---
layout: archive
permalink: /year-archive/
title: "Posts by Year"
author_profile: true
---

{% assign postsByYear = site.posts | group_by_exp:"post", "post.date | date: '%Y'"  %}

{% for year in postsByYear %}
  <h2 id="{{ year.name | slugify }}" class="archive__subtitle">{{ year.name }}</h2>
  {% for post in year.items %}
    {% include archive-single.html %}
  {% endfor %}
{% endfor %}
```