/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("giphy", "./Sprite1/costumes/giphy.png", { x: 480, y: 270 }),
      new Costume("giphy2", "./Sprite1/costumes/giphy2.png", {
        x: 480,
        y: 270
      }),
      new Costume("giphy3", "./Sprite1/costumes/giphy3.png", {
        x: 480,
        y: 270
      }),
      new Costume("giphy4", "./Sprite1/costumes/giphy4.png", {
        x: 480,
        y: 270
      }),
      new Costume("giphy5", "./Sprite1/costumes/giphy5.png", {
        x: 480,
        y: 270
      }),
      new Costume("giphy6", "./Sprite1/costumes/giphy6.png", {
        x: 480,
        y: 270
      }),
      new Costume("giphy7", "./Sprite1/costumes/giphy7.png", {
        x: 480,
        y: 270
      }),
      new Costume("giphy8", "./Sprite1/costumes/giphy8.png", {
        x: 480,
        y: 270
      }),
      new Costume("giphy9", "./Sprite1/costumes/giphy9.png", {
        x: 480,
        y: 270
      }),
      new Costume("giphy10", "./Sprite1/costumes/giphy10.png", {
        x: 480,
        y: 270
      }),
      new Costume("giphy11", "./Sprite1/costumes/giphy11.png", {
        x: 480,
        y: 270
      }),
      new Costume("giphy12", "./Sprite1/costumes/giphy12.png", {
        x: 480,
        y: 270
      }),
      new Costume("giphy13", "./Sprite1/costumes/giphy13.png", {
        x: 480,
        y: 270
      }),
      new Costume("giphy14", "./Sprite1/costumes/giphy14.png", {
        x: 480,
        y: 270
      }),
      new Costume("giphy15", "./Sprite1/costumes/giphy15.png", {
        x: 480,
        y: 270
      }),
      new Costume("giphy16", "./Sprite1/costumes/giphy16.png", {
        x: 480,
        y: 270
      }),
      new Costume("giphy17", "./Sprite1/costumes/giphy17.png", {
        x: 480,
        y: 270
      }),
      new Costume("giphy18", "./Sprite1/costumes/giphy18.png", {
        x: 480,
        y: 270
      }),
      new Costume("giphy19", "./Sprite1/costumes/giphy19.png", {
        x: 480,
        y: 270
      }),
      new Costume("giphy20", "./Sprite1/costumes/giphy20.png", {
        x: 480,
        y: 270
      }),
      new Costume("giphy21", "./Sprite1/costumes/giphy21.png", {
        x: 480,
        y: 270
      }),
      new Costume("giphy22", "./Sprite1/costumes/giphy22.png", {
        x: 480,
        y: 270
      }),
      new Costume("giphy23", "./Sprite1/costumes/giphy23.png", {
        x: 480,
        y: 270
      }),
      new Costume("giphy24", "./Sprite1/costumes/giphy24.png", {
        x: 480,
        y: 270
      }),
      new Costume("giphy25", "./Sprite1/costumes/giphy25.png", {
        x: 480,
        y: 270
      }),
      new Costume("giphy26", "./Sprite1/costumes/giphy26.png", {
        x: 480,
        y: 270
      }),
      new Costume("giphy27", "./Sprite1/costumes/giphy27.png", {
        x: 480,
        y: 270
      }),
      new Costume("giphy28", "./Sprite1/costumes/giphy28.png", {
        x: 480,
        y: 270
      }),
      new Costume("giphy29", "./Sprite1/costumes/giphy29.png", {
        x: 480,
        y: 270
      }),
      new Costume("giphy30", "./Sprite1/costumes/giphy30.png", {
        x: 480,
        y: 270
      }),
      new Costume("giphy31", "./Sprite1/costumes/giphy31.png", {
        x: 480,
        y: 270
      }),
      new Costume("giphy32", "./Sprite1/costumes/giphy32.png", {
        x: 480,
        y: 270
      }),
      new Costume("giphy33", "./Sprite1/costumes/giphy33.png", {
        x: 480,
        y: 270
      }),
      new Costume("giphy34", "./Sprite1/costumes/giphy34.png", {
        x: 480,
        y: 270
      }),
      new Costume("giphy35", "./Sprite1/costumes/giphy35.png", {
        x: 480,
        y: 270
      }),
      new Costume("giphy36", "./Sprite1/costumes/giphy36.png", {
        x: 480,
        y: 270
      }),
      new Costume("giphy37", "./Sprite1/costumes/giphy37.png", {
        x: 480,
        y: 270
      }),
      new Costume("giphy38", "./Sprite1/costumes/giphy38.png", {
        x: 480,
        y: 270
      })
    ];

    this.sounds = [
      new Sound("drake-low-quality", "./Sprite1/sounds/drake-low-quality.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.costume = "giphy";
      for (let i = 0; i < 37; i++) {
        this.costumeNumber += 1;
        yield* this.wait(0.03);
        yield;
      }
      for (let i = 0; i < 37; i++) {
        this.costume = this.costumeNumber - 1;
        yield* this.wait(0.03);
        yield;
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      yield* this.playSoundUntilDone("drake-low-quality");
      yield;
    }
  }
}
