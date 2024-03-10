// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

mport { Component } from '@angular/core';

@Component({
  .....
})
export class AppComponent  {
  name = 'hovering';

  over(){
    console.log("Mouseover triggered");
  }

  out(){
    console.log("Mouseout triggered");
  }
}