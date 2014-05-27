---
layout: default

class: french

title: Blog
---

  <h1>Blog Posts</h1>
    {% for post in site.posts %}
      {% capture year %}{{post.date | date: "%Y"}}{% endcapture %}
      {% if year == "2014" %}
      <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
      {{ post.excerpt }}
      {% endif %}
    {% endfor %}
