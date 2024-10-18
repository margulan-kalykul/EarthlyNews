import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';

interface Article {
  title: string;
  content: string;
  author: string;
}

@Component({
  selector: 'app-sport',
  standalone: true,
  imports: [],
  templateUrl: './sport.component.html',
  styleUrl: './sport.component.css'
})
export class SportComponent {
  hasArticles: boolean = false;
  articles: Article[] = [
    {
      title: 'Breaking News: Market Hits All-Time High',
      content: 'The stock market reached new heights today...',
      author: 'John Doe'
    },
    {
      title: 'Sports Update: Local Team Wins Championship',
      content: 'In an exhilarating game last night...',
      author: 'Jane Smith'
    },
    {
      title: 'Technology: New Smartphone Released',
      content: 'The latest smartphone has been unveiled...',
      author: 'Alice Johnson'
    },
    {
      title: 'Health: New Study on Nutrition',
      content: 'A recent study reveals important findings...',
      author: 'Bob Brown'
    },
    {
      title: 'Travel: Top 10 Destinations for 2024',
      content: 'Planning your next vacation? Here are the top 10...',
      author: 'Charlie Green'
    },
  ];

  constructor () {
    this.hasArticles = this.articles.length > 0;
  }
}
