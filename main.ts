enum ActionKind {
    Walking,
    Idle,
    Jumping,
    coolDown
}
namespace SpriteKind {
    export const Indicador = SpriteKind.create()
}
namespace StatusBarKind {
    export const Indicador = StatusBarKind.create()
}
function Player_2 () {
    P2 = sprites.create(img`
        . . . . . f f f f . . . . . 
        . . . f f f 7 7 f f f . . . 
        . . f f f 7 7 7 7 f f f . . 
        . f f f 9 9 9 9 9 9 f f f . 
        . f f 9 7 7 7 7 7 7 9 9 f . 
        . f 9 7 f f f f f f 7 9 f . 
        . f f f f 9 9 9 9 f f f f . 
        f f 9 f b f a a f b f 9 f f 
        f 9 9 a 1 f d d f 1 a 9 9 f 
        . f f f f d d d d d 9 9 f . 
        f d d d d f a a a 9 9 f . . 
        f b b b b f 7 7 7 7 f a 9 . 
        f b b b b f 7 7 7 7 f d a . 
        . f c c f a 5 5 a a f a a . 
        . . f f f f f f f f . . . . 
        . . . . f f . . f f . . . . 
        `, SpriteKind.Player)
    P2.setPosition(130, 90)
    controller.player2.moveSprite(P2, 75, 0)
    P2.ay = 600
    P2.fx = 30
    aimP2 = 0
    statusbar2 = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar2.setPosition(147, 12)
    statusbar2.value = 100
    indicadorBala2 = statusbars.create(6, 6, StatusBarKind.Indicador)
    indicadorBala2.setImage(img`
        . 4 4 4 4 . 
        4 5 5 5 5 4 
        4 5 5 5 5 4 
        2 5 5 5 5 2 
        2 5 5 5 5 2 
        . 2 2 2 2 . 
        `)
    indicadorBala2.setPosition(154, 20)
    shotP2 = true
}
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (shotP2 == true) {
        animation.runImageAnimation(
        indicadorBala2,
        [img`
            . b b b b . 
            b b b b b b 
            b b b b b b 
            b b b b b b 
            b b b b b b 
            . b b b b . 
            `,img`
            . b b b b . 
            b b b b b b 
            b b b b b b 
            b b b b b b 
            b b b b b b 
            . 2 2 2 2 . 
            `,img`
            . b b b b . 
            b b b b b b 
            b b b b b b 
            2 5 5 5 5 2 
            2 5 5 5 5 2 
            . 2 2 2 2 . 
            `,img`
            . b b b b . 
            4 5 5 5 5 4 
            4 5 5 5 5 4 
            2 5 5 5 5 2 
            2 5 5 5 5 2 
            . 2 2 2 2 . 
            `,img`
            . 4 4 4 4 . 
            4 5 5 5 5 4 
            4 5 5 5 5 4 
            2 5 5 5 5 2 
            2 5 5 5 5 2 
            . 2 2 2 2 . 
            `],
        1000,
        false
        )
        shotP2 = false
        if (aimP2 == 1) {
            projectile = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . 4 5 5 4 . . . . . . 
                . . . . . . 2 5 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Projectile)
            projectile.setPosition(P2.x + -10, P2.y)
            projectile.setFlag(SpriteFlag.DestroyOnWall, true)
            projectile.setVelocity(-100, 0)
        }
        if (aimP2 == 2) {
            projectile = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . 4 5 5 4 . . . . . . 
                . . . . . . 2 5 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Projectile)
            projectile.setPosition(P2.x + 10, P2.y)
            projectile.setFlag(SpriteFlag.DestroyOnWall, true)
            projectile.setVelocity(100, 0)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    if (P1.y > 150) {
        statusbar1.value += -0.25
    }
    if (P2.y > 150) {
        statusbar2.value += -0.25
    }
})
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (P1.isHittingTile(CollisionDirection.Bottom)) {
        P1.vy = -210
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    if (P1.y > 150) {
        statusbar1.value += -0.25
    }
    if (P2.y > 150) {
        statusbar2.value += -0.25
    }
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (hitP2 == true) {
        if (aimP2 == 1) {
            hitP2 = false
            P2.setImage(img`
                . . . . . . . . . . . f f . . . . . 
                . . . . . . . . . f f 7 f f f f . . 
                . . . . . . . . f f 7 f 9 9 9 9 f . 
                . . . . . . . f f 7 7 f 9 9 9 9 f . 
                . . . . . . . f 9 9 9 9 f f 9 9 f . 
                . . . . . . f 9 7 7 7 7 9 9 f f f . 
                . . . . . . f 7 9 f f f f 7 7 7 f . 
                . . . . . . f f f 9 9 9 f f f f f f 
                . . . . . . f 9 9 a a f b 9 a a 9 f 
                . . . . . . . f 9 d d f b a d a 9 f 
                . . . . . . c . 9 9 d d d a 9 9 f f 
                c c c c c c c 9 d d 9 9 7 7 7 7 f . 
                . c d d d d c 9 d d a a 9 a a a f . 
                . . c c c c c . 9 9 9 9 f f f f f . 
                . . . . . . c . . . f f f f f f f f 
                . . . . . . . . . . . f f . . f f f 
                `)
        }
        if (aimP2 == 2) {
            hitP2 = false
            P2.setImage(img`
                . . . . . f f . . . . . . . . . . . 
                . . f f f f 7 f f . . . . . . . . . 
                . f 9 9 9 9 f 7 f f . . . . . . . . 
                . f 9 9 9 9 f 7 7 f f . . . . . . . 
                . f 9 9 f f 9 9 9 9 f . . . . . . . 
                . f f f 9 9 7 7 7 7 9 f . . . . . . 
                . f 7 7 7 f f f f 9 7 f . . . . . . 
                f f f f f f 9 9 9 f f f . . . . . . 
                f 9 a a 9 b f a a 9 9 f . . . . . . 
                f 9 a d a b f d d 9 f . . . . . . . 
                f f 9 9 a d d d 9 9 . c . . . . . . 
                . f 7 7 7 7 9 9 d d 9 c c c c c c c 
                . f a a a 9 a a d d 9 c d d d d c . 
                . f f f f f 9 9 9 9 . c c c c c . . 
                f f f f f f f f . . . c . . . . . . 
                f f f . . f f . . . . . . . . . . . 
                `)
        }
    }
    pause(250)
    if (aimP2 == 1) {
        P2.setImage(img`
            . . . . . . f f f f f f . . 
            . . . . . f 7 f 9 9 9 9 f . 
            . . . . f 7 7 7 f 9 9 9 f . 
            . . . . f 9 9 9 9 f f 9 9 f 
            c c . f 9 7 7 7 7 9 9 f f f 
            c d c f 7 9 f f f f 7 7 7 f 
            c d d c f f 9 9 9 f f f f f 
            . c d d c 9 a a f b e a f f 
            . . c d c 9 d d f 1 a d a f 
            . . c c c d 9 d d d a 9 9 f 
            . . . 9 d d a 9 a a 9 9 f f 
            . . . . 9 9 a a 7 7 7 7 f . 
            . . . . . f 7 9 7 7 7 7 f . 
            . . . . . f 5 5 a a a a f . 
            . . . . . . f f f f f f . . 
            . . . . . . . . f f f . . . 
            `)
    }
    if (aimP2 == 2) {
        P2.setImage(img`
            . . f f f f f f . . . . . . 
            . f 9 9 9 9 f 7 f . . . . . 
            . f 9 9 9 f 7 7 7 f . . . . 
            f 9 9 f f 9 9 9 9 f . . . . 
            f f f 9 9 7 7 7 7 9 f . c c 
            f 7 7 7 f f f f 9 7 f c d c 
            f f f f f 9 9 9 f f c d d c 
            f f a e b f a a 9 c d d c . 
            f a d a 1 f d d 9 c d c . . 
            f 9 9 a d d d 9 d c c c . . 
            f f 9 9 a a 9 a d d 9 . . . 
            . f 7 7 7 7 a a 9 9 . . . . 
            . f 7 7 7 7 9 7 f . . . . . 
            . f a a a a 5 5 f . . . . . 
            . . f f f f f f . . . . . . 
            . . . f f f . . . . . . . . 
            `)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    if (shotP1 == false) {
        statusbar2.value += -20
    }
    if (shotP2 == false) {
        statusbar1.value += -20
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (P2.isHittingTile(CollisionDirection.Bottom)) {
        P2.vy = -210
    }
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    P2.setImage(img`
        . . f f f f f f . . . . . . 
        . f 9 9 9 9 f 7 f . . . . . 
        . f 9 9 9 f 7 7 7 f . . . . 
        f 9 9 f f 9 9 9 9 f . . . . 
        f f f 9 9 7 7 7 7 9 f . c c 
        f 7 7 7 f f f f 9 7 f c d c 
        f f f f f 9 9 9 f f c d d c 
        f f a e b f a a 9 c d d c . 
        f a d a 1 f d d 9 c d c . . 
        f 9 9 a d d d 9 d c c c . . 
        f f 9 9 a a 9 a d d 9 . . . 
        . f 7 7 7 7 a a 9 9 . . . . 
        . f 7 7 7 7 9 7 f . . . . . 
        . f a a a a 5 5 f . . . . . 
        . . f f f f f f . . . . . . 
        . . . f f f . . . . . . . . 
        `)
    aimP2 = 2
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    if (P1.y > 150) {
        statusbar1.value += -0.25
    }
    if (P2.y > 150) {
        statusbar2.value += -0.25
    }
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    P2.setImage(img`
        . . . . . . f f f f f f . . 
        . . . . . f 7 f 9 9 9 9 f . 
        . . . . f 7 7 7 f 9 9 9 f . 
        . . . . f 9 9 9 9 f f 9 9 f 
        c c . f 9 7 7 7 7 9 9 f f f 
        c d c f 7 9 f f f f 7 7 7 f 
        c d d c f f 9 9 9 f f f f f 
        . c d d c 9 a a f b e a f f 
        . . c d c 9 d d f 1 a d a f 
        . . c c c d 9 d d d a 9 9 f 
        . . . 9 d d a 9 a a 9 9 f f 
        . . . . 9 9 a a 7 7 7 7 f . 
        . . . . . f 7 9 7 7 7 7 f . 
        . . . . . f 5 5 a a a a f . 
        . . . . . . f f f f f f . . 
        . . . . . . . . f f f . . . 
        `)
    aimP2 = 1
})
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    P1.setImage(img`
        . . f f f f f f . . . . . . 
        . f e e e e f 2 f . . . . . 
        . f e e e f 2 2 2 f . . . . 
        f e e f f e e e e f . . . . 
        f f f e e 2 2 2 2 e f . c c 
        f 2 2 2 f f f f e 2 f c d c 
        f f f f f e e e f f c d d c 
        f f 4 e b f 4 4 e c d d c . 
        f 4 d 4 1 f d d e c d c . . 
        f e e 4 d d d e d c c c . . 
        f f e e 4 4 e 4 d d e . . . 
        . f 2 2 2 2 4 4 e e . . . . 
        . f 2 2 2 2 e 2 f . . . . . 
        . f 4 4 4 4 5 5 f . . . . . 
        . . f f f f f f . . . . . . 
        . . . f f f . . . . . . . . 
        `)
    aimP1 = 2
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (hitP1 == true) {
        if (aimP1 == 1) {
            hitP1 = false
            P1.setImage(img`
                . . . . . . . . . . . f f . . . . . 
                . . . . . . . . . f f 2 f f f f . . 
                . . . . . . . . f f 2 f e e e e f . 
                . . . . . . . f f 2 2 f e e e e f . 
                . . . . . . . f e e e e f f e e f . 
                . . . . . . f e 2 2 2 2 e e f f f . 
                . . . . . . f 2 e f f f f 2 2 2 f . 
                . . . . . . f f f e e e f f f f f f 
                . . . . . . f e e 4 4 f b e 4 4 e f 
                . . . . . . . f e d d f b 4 d 4 e f 
                . . . . . . c . e e d d d 4 e e f f 
                c c c c c c c e d d e e 2 2 2 2 f . 
                . c d d d d c e d d 4 4 e 4 4 4 f . 
                . . c c c c c . e e e e f f f f f . 
                . . . . . . c . . . f f f f f f f f 
                . . . . . . . . . . . f f . . f f f 
                `)
        }
        if (aimP1 == 2) {
            hitP1 = false
            P1.setImage(img`
                . . . . . f f . . . . . . . . . . . 
                . . f f f f 2 f f . . . . . . . . . 
                . f e e e e f 2 f f . . . . . . . . 
                . f e e e e f 2 2 f f . . . . . . . 
                . f e e f f e e e e f . . . . . . . 
                . f f f e e 2 2 2 2 e f . . . . . . 
                . f 2 2 2 f f f f e 2 f . . . . . . 
                f f f f f f e e e f f f . . . . . . 
                f e 4 4 e b f 4 4 e e f . . . . . . 
                f e 4 d 4 b f d d e f . . . . . . . 
                f f e e 4 d d d e e . c . . . . . . 
                . f 2 2 2 2 e e d d e c c c c c c c 
                . f 4 4 4 e 4 4 d d e c d d d d c . 
                . f f f f f e e e e . c c c c c . . 
                f f f f f f f f . . . c . . . . . . 
                f f f . . f f . . . . . . . . . . . 
                `)
        }
    }
    pause(250)
    if (aimP1 == 1) {
        P1.setImage(img`
            . . . . . . f f f f f f . . 
            . . . . . f 2 f e e e e f . 
            . . . . f 2 2 2 f e e e f . 
            . . . . f e e e e f f e e f 
            c c . f e 2 2 2 2 e e f f f 
            c d c f 2 e f f f f 2 2 2 f 
            c d d c f f e e e f f f f f 
            . c d d c e 4 4 f b e 4 f f 
            . . c d c e d d f 1 4 d 4 f 
            . . c c c d e d d d 4 e e f 
            . . . e d d 4 e 4 4 e e f f 
            . . . . e e 4 4 2 2 2 2 f . 
            . . . . . f 2 e 2 2 2 2 f . 
            . . . . . f 5 5 4 4 4 4 f . 
            . . . . . . f f f f f f . . 
            . . . . . . . . f f f . . . 
            `)
    }
    if (aimP1 == 2) {
        P1.setImage(img`
            . . f f f f f f . . . . . . 
            . f e e e e f 2 f . . . . . 
            . f e e e f 2 2 2 f . . . . 
            f e e f f e e e e f . . . . 
            f f f e e 2 2 2 2 e f . c c 
            f 2 2 2 f f f f e 2 f c d c 
            f f f f f e e e f f c d d c 
            f f 4 e b f 4 4 e c d d c . 
            f 4 d 4 1 f d d e c d c . . 
            f e e 4 d d d e d c c c . . 
            f f e e 4 4 e 4 d d e . . . 
            . f 2 2 2 2 4 4 e e . . . . 
            . f 2 2 2 2 e 2 f . . . . . 
            . f 4 4 4 4 5 5 f . . . . . 
            . . f f f f f f . . . . . . 
            . . . f f f . . . . . . . . 
            `)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite2, otherSprite2) {
    if (hitP1 == false) {
        statusbar2.value += -10
        pause(1000)
    }
    if (hitP2 == false) {
        statusbar1.value += -10
        pause(1000)
    }
})
function mapa () {
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fff999ffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999fff99ffff
        fff9ff9ff99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ff9f9ff9fff
        fff9ff9f9f9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ff9ffff9fff
        fff999ffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999ffff9ffff
        fff9ffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffff9fffff
        fff9ffff99999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffff9999fff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffff
        ffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffc
        fffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffff
        fffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffffffffffff
        fff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbffffffffffff
        ffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffff
        f33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccffffffffffffffffffff
        ff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffff
        ffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffff
        fffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffff
        fffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcfffff
        ffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffff
        fffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcffffffffffff
        fffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffff
        ffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffff
        ffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffff
        fffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccf
        ccfffffffffcccccccccccccccccccccccccccccccfffffffffcccccccccccccccccccccccccccccccfffffffffcccccccccccccccccccccccccccccccfffffffffccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        bbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbb
        bbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbb
        bbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbb
        bbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbb
        bbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbb
        3bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb33333333
        333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb
        cc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccc
        cccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcc
        cccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccc
        cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc
        bbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbb
        bbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bb
        dddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddd
        dddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33d
        dddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbd
        ddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbdd
        ddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33ddddddddddddd
        ddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbdddddddddddddd
        ddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3ddddddddddddddd
        d333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333dddddddddddddddddd
        333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3
        33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333d
        33ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd33
        d333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333dddddddddddddddd
        ddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3d
        b3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbb
        bb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbb
        bbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbb
        b3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbb
        dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddd
        dddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddd
        dddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddd
        dd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddd
        3333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd333
        33333333333333333333333333dddddddd33333333333333333333333333333333dddddddd33333333333333333333333333333333dddddddd33333333333333333333333333333333dddddddd333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        `)
    tiles.setCurrentTilemap(tilemap`level3`)
    scene.setBackgroundImage(img`
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666fff6666f66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fff666ff6666
        666f66f66ff66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f66f6f66f666
        666f66f6f6f66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f66f6666f666
        666fff6666f66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fff6666f6666
        666f666666f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666222d6666666666666666666666666666666f66666f66666
        666f6666fffff66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666d111222211116666666666666666666666666666f6666ffff666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666611111222211111166666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666dd1111112222211111111666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666d11111111112222111111111111666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666d11111111111122222111111111111116666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666d111111111111111222221111111111111111111111d6666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666111111111111111111222221111111111111111111111111111ddd666666666666666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666611111111111111111111112222211111111111111d1111111111111111dddddd66666dddd
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666111111dddd11111111111111122222221111111111111111111111dd1111111ddddddddddddd1
        6666666666666666666666666666666666666666666666666666666666666666666666666666666dd111111ddd111111111111111111222222211d11111111dd111dd11111111111111111111dddd111
        6666666666666666666666666666666666666666666666666666666666666666666666661111111111111111111111111111111111122222222d1111ddddddddd111111111ddddd111ddddddddd11111
        66666666666666666666666666666666666666666666666666666666666666666666911111111111111d1111111111dddddd11111dd22222222dddddddddddddddd1111dd111111111ddddddd1111111
        666666611111d66666666666666666666666666666666666666666666d1111111111d111d11111111111111111111111dddd1111dd22222d2222dddddddddddddd111111111111dddddddddd11111111
        66666111111111166666666666666666666666666666666dd1111dddd11111111111ddddd11111111111111111111111111111dddd22222d2222ddddddddddddd111111dddddddddddddddd11111111b
        666111111111111111666666666666666666666dd111111d11111ddddddddddddddddddddddddddddddddddddd11111111111d222222222d2222dddddddddddddd11ddddddddddddddddd11111bbbbbb
        1ddd1dd11111ddd1111111666666666dd11111111111111dddddddddddd11111111ddddddddddddddddddddddddddd1111112222222222dd2222ddddddddddddddddddddddddddddddd11111bbbbbbbb
        ddddddddd11dddddd11111111111dd1111111111dddddddddddddd1111111111111111ddddddddddddddddddddddddddd1222222222222ddd222dddddddddddddddddddddddddddddbbb1bbbbbbbbbbb
        dddddddddddddddddddddd1111111d1dddddddddddddddddd1111111111111111111111111dddddddddddddddddddddd2222222222222dddd2222dddddddddddddddddddddddddbbbbbbbbbbbbbbbbbb
        111111ddddddddddddddddddddddddddddddddddddddb111111111111111111111111111111111ddddddddddddddd22222222222222221ddd2222ddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbb
        1111111111dddddddddddddddddddddddddddddddb111111111111111111111111111111111b1111dddddddddd22222222222dd22222d1ddd2222dddddddddddddddddddbbbbbbbbbbbbbbbbbbbbb11b
        1111111111111dddddddddddddddddddddddddb1111111111111111111111bbb11111111111111111111ddddd2222222222ddd222222ddddd2222dddddddddddddddbbbbbbbbbbbbbbbbbbbbb1111111
        1111111bbb111111ddddddddddddddddddddbb1111111111111111bbbbbb111bb111111111111111111111b2222222222dddd222222dddddd2222ddddddddddddbbbbbbbbbbbbbbbbbb1111111111111
        bbbb111bbbbbb11111ddddddddddddddbbb11111111b111bbb11bbbbbbbbb1bbbbbbbbb1111bb1111b1112222222222dddddd22222ddddddd2222ddddddddbbbbbbbbbbbbbbbbbbbb111111111111111
        bbbbbbbbbbbbbbbb1111bddddddbbbbbbbb1111bbb111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11112222222222bbbbbbdd22222ddddddd22222ddddbbbbbbbbbbbbbbbbbbbbb11111111111111111
        bbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb11bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb222222222bbbbbbbbbb2222222dddddbb2222bbbbbbbbbbbbbbbbbbbbbbc1111111111111111111
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb2222222222bbbbbbbbbbb22222222bbbbbbb2222bbbbbbbbbbbbbbbbbbcc1111111111111111111c11
        bbbbbbbb1b11bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb222222222bbbbbbbbbbbbbb22222222bbbbbbb2222bbbbbbbbbbbbcccc11111111111111111111111111
        bbbbb11111111111b11bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb222222222bbbbbbbbbbbbbbb222222222bbbbbbb2222bbbbbccccc11111111111c11111111111111111111
        bbb11111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111111bbbbbbbbb2222222222bbbbbbbbbbbbb22222222222bbbbbbb22222cccccc11111111111c11111c111111cc11c11111c
        bb1111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbb111111111111111bbbbbb222222222222bbbbbbbbbbbb222222222222211111cc2222ccccc1111c111c11111111c1111cccc11cc11111c
        bb11111111111111111111111111bb1bbbbbbbbbbbbbbbcc1111111111111111111bb2222222bb22222bbbbbbbbbb22222222222222211111112222ccccccccc11111111c111c1111cccc11cc111111c
        b11111c1111111111111111111111c1111111bbbc111111111111111111111cc1111222222bbbb22222bbbbbbbbb2222222221222222111111c2222ccccccc11111cccccc111111ccccc11ccc11111cc
        b1111ccc1111111111111111111111cc111111ccccccccc111111111111111cccc22222211cbbb22222bbbbbbb2222222222112222221111ccc2222cccccccc1cccccccc11c111ccccc111cc11111ccc
        1111dccc111111111111111111111111cccc11cccccccccc11111ccccccccc22222222c11111122222bbbbbb222222222222cc2222222cccccc22222ccccccccccccccc111111ccccccc1ccc11111ccc
        1cccc1111111111111111111c111111111ccccccccccccccccccccccccccc22222222cccccccc22222ccccc2222222222222ccc222222cccccc22222cccccccccccccccc1111cccccccccccccccccccc
        cccc11111111111111111111111111111111cccccccccccccccccccccccc2222222cccccccccc22222ccc22222222c22222cccc222222cccccc222222cccccccccccccccc1cccccccccccccccccccccc
        ccc111111111111111111111111111111c111cccccccccccccccccccccc222222ccccccccccc22222ccc2222222cc22222ccccc222222cccccc222222ccccccccccccccccccccccccccccccccccccccc
        11c11111c11111c1c1111cc1111111c111c11111cccccccccccccccc22222222cccccccccccc22222c2222222cccc22222ccccc222222ccccccc22222ccccccccccccccccccccccccccccccccccccccc
        1111111ccc111cc1cc111cc111111111111cc111111cccccccccccc22222222cccccccccccc222222222222ccccc22222cccccc2222222cccccc222222cccccccccccccccccccccccccccccccccccccc
        111c11ccc1111cc1cc11ccccc111ccc11111cccc1111ccccccccccc2222222ccccccccccccc2222222222ccccccc22222ccccc22222222ccccccc22222cccccccccccccccccccccccccccccccccccccc
        11cccccccc11cc11cc11cccccc111ccccc11ccccccccccccccccc22222222ccccccccccccc22222222ccccccccc22222ccccc222222222ccccccc22222cccccccccccccccccccccccccccccccccccccc
        ccccccccccccccc1ccc11ccccccc11cccccccccccccccccccccc22222222cccccccccccccc2222222ccccccccc222222ccccc222222222ccccccc222222ccccccccccccccccccccccccccccccccccccc
        ccccccccccccccc1cccc1cccccccc11cccccccccccccccccccc22222222ccccccccccccccc22222cccccccccc22222cccccc2222222222cccccccc22222ccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccc222222ccccccccccccccccc2222cccccccccccc22222cccccc2222222222cccccccc22222ccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccc22222cccccccccccccccc2222ccccccccccccc22222cccccc222222222222ccccccc22222ccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccc222222cccccccccccccc22222cccccccccccccc2222ccccccc222222222222cccccccc2222ccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccc222222ccccccccccccc22222ccccccccccccccc2222ccccccc22222c2222222cccccccc22222cccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccc222222ccccccccccccc2222cccccccccccccccc2222cccccccc22222c2222222cccccccc22222ccccccccccccccc6cccccccccccccccccccc
        cccccccccccccccccccccccccc66cccccccccccccccc6c2222222ccccccccccc2222ccccccccccccccccc222226c6cccc22222cc22222222cccccccc2222ccc6ccccccc6ccc66ccccc6ccccccccccccc
        6cc6c6666c6c6666c666cc66c666666666666666c66666222222666c66666662222666666666666cc6662222266666666222226662222222666666662222266666666cc666666666666666666666c666
        666666666666666666666666e6666666666666666666e22222226666666622222666666666666666666222222ee6ee662222266662222222666e66e62222266666e666e66666666eeee6666e66666666
        6666e66e6e6ee666e66666666666666666ee6666666ee22222266eeee66222222ee66666eee66eee6622222266ee66ee22226eeee22222222666666ee2222e66666666e666666666eeeee6666ee66666
        666e666666666666666e666666666666662222222222222222222222222222222222222222222222222222222222222222226ee6622222222666666ee2222eeee6eee66666666666ee6e666ee6666666
        6666666e66666eee66666666622222222222222222222222222222222222222222222222222222222222222222222222222222262222222222222222222222222222262222222e6666666666666e666e
        66666666666666e66666666e22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222266666e666666666e
        66666666666666666ee66662222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222226666e66666e66e
        66666666666e6666666666e2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222e66666e666666
        6666e66ee666666ee6e22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222266666666e666
        666666666666ee2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222262222666666e
        66e6666666e22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222666666
        6e6666e662222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222266666
        6e666e662222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222266e
        66666e2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222666
        6666622222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222666
        6666622222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222666
        66e6222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222666
        ee66222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222e66
        666e222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222666
        66666222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222662e66ee
        ee66222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222266666e66
        e6666222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222666ee666
        e666866222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222622222226226666666666
        666e66622222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222262222226667666666e666
        6666662262226222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222666266e666666eee66666
        66e666e666226222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222666666666ee666e666666666
        66e6666666266222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222226666666666666666666666666
        6666666666e66622222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222226266eee666666e66666666666666
        e66666e66666662222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222626e666e6666e666e66666666666
        ee66666666666622222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222266666666ee666e666e66666666666
        666666666666666622222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222226686ee666e6666e666e6666e6e66e
        6666666666e66666222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222226666e666eee6666666e6e6666666
        6666666666e6666222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222226e66666eee66ee6666666e6666666
        e66e66666e66622222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222666666666eee6666eee666666
        e66666e6666662222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222e66666666ee666ee6666
        66666e666622222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222666666e666666666
        666e66622222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222e66666e
        e6e6662222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222666
        6666622222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222226
        6222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        ee22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        `)
    tiles.setCurrentTilemap(tilemap`level4`)
}
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (shotP1 == true) {
        animation.runImageAnimation(
        indicadorBala1,
        [img`
            . b b b b . 
            b b b b b b 
            b b b b b b 
            b b b b b b 
            b b b b b b 
            . b b b b . 
            `,img`
            . b b b b . 
            b b b b b b 
            b b b b b b 
            b b b b b b 
            b b b b b b 
            . 2 2 2 2 . 
            `,img`
            . b b b b . 
            b b b b b b 
            b b b b b b 
            2 5 5 5 5 2 
            2 5 5 5 5 2 
            . 2 2 2 2 . 
            `,img`
            . b b b b . 
            4 5 5 5 5 4 
            4 5 5 5 5 4 
            2 5 5 5 5 2 
            2 5 5 5 5 2 
            . 2 2 2 2 . 
            `,img`
            . 4 4 4 4 . 
            4 5 5 5 5 4 
            4 5 5 5 5 4 
            2 5 5 5 5 2 
            2 5 5 5 5 2 
            . 2 2 2 2 . 
            `],
        1000,
        false
        )
        shotP1 = false
        if (aimP1 == 1) {
            projectile = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . 4 5 5 4 . . . . . . 
                . . . . . . 2 5 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Projectile)
            projectile.setPosition(P1.x + -10, P1.y)
            projectile.setFlag(SpriteFlag.DestroyOnWall, true)
            projectile.setVelocity(-100, 0)
        }
        if (aimP1 == 2) {
            projectile = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . 4 5 5 4 . . . . . . 
                . . . . . . 2 5 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Projectile)
            projectile.setPosition(P1.x + 10, P1.y)
            projectile.setFlag(SpriteFlag.DestroyOnWall, true)
            projectile.setVelocity(100, 0)
        }
    }
})
function Player_1 () {
    P1 = sprites.create(img`
        . . . . . f f f f . . . . . 
        . . . f f f 2 2 f f f . . . 
        . . f f f 2 2 2 2 f f f . . 
        . f f f e e e e e e f f f . 
        . f f e 2 2 2 2 2 2 e e f . 
        . f e 2 f f f f f f 2 e f . 
        . f f f f e e e e f f f f . 
        f f e f b f 4 4 f b f e f f 
        f e e 4 1 f d d f 1 4 e e f 
        . f f f f d d d d d e e f . 
        f d d d d f 4 4 4 e e f . . 
        f b b b b f 2 2 2 2 f 4 e . 
        f b b b b f 2 2 2 2 f d 4 . 
        . f c c f 4 5 5 4 4 f 4 4 . 
        . . f f f f f f f f . . . . 
        . . . . f f . . f f . . . . 
        `, SpriteKind.Player)
    P1.setPosition(40, 90)
    controller.player1.moveSprite(P1, 75, 0)
    P1.ay = 600
    P1.fx = 30
    aimP1 = 0
    statusbar1 = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar1.setPosition(13, 12)
    statusbar1.value = 100
    indicadorBala1 = statusbars.create(6, 6, StatusBarKind.Indicador)
    indicadorBala1.setImage(img`
        . 4 4 4 4 . 
        4 5 5 5 5 4 
        4 5 5 5 5 4 
        2 5 5 5 5 2 
        2 5 5 5 5 2 
        . 2 2 2 2 . 
        `)
    indicadorBala1.setPosition(6, 20)
    shotP1 = true
}
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    P1.setImage(img`
        . . . . . . f f f f f f . . 
        . . . . . f 2 f e e e e f . 
        . . . . f 2 2 2 f e e e f . 
        . . . . f e e e e f f e e f 
        c c . f e 2 2 2 2 e e f f f 
        c d c f 2 e f f f f 2 2 2 f 
        c d d c f f e e e f f f f f 
        . c d d c e 4 4 f b e 4 f f 
        . . c d c e d d f 1 4 d 4 f 
        . . c c c d e d d d 4 e e f 
        . . . e d d 4 e 4 4 e e f f 
        . . . . e e 4 4 2 2 2 2 f . 
        . . . . . f 2 e 2 2 2 2 f . 
        . . . . . f 5 5 4 4 4 4 f . 
        . . . . . . f f f f f f . . 
        . . . . . . . . f f f . . . 
        `)
    aimP1 = 1
})
let indicadorBala1: StatusBarSprite = null
let hitP1 = false
let aimP1 = 0
let shotP1 = false
let hitP2 = false
let statusbar1: StatusBarSprite = null
let P1: Sprite = null
let projectile: Sprite = null
let shotP2 = false
let indicadorBala2: StatusBarSprite = null
let statusbar2: StatusBarSprite = null
let aimP2 = 0
let P2: Sprite = null
scene.setBackgroundImage(img`
    1111ffffffffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffff1111
    1111ffffffffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffff1111
    1111ffffffffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffff1111
    ffffffffff22222fffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffff77777fffff1111
    ffffffffff22222fffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffff77777fffff1111
    ffffffffff22222fffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffff77777fffff1111
    ffffffffff22222fffff111111111111111fffffffffffffff11111111111111111fffffffffffffff11111111111fffffffffffffffffffffffffffffff111111111111ffffffffff77777fffff1111
    fffff2222222222fffff111111111111111fffffffffffffff11111111111111111fffffffffffffff11111111111fffffffffffffffffffffffffffffff111111111111fffff7777777777fffff1111
    fffff2222222222fffff111111111111111fffffffffffffff11111111111111111fffffffffffffff11111111111fffffffffffffffffffffffffffffff111111111111fffff7777777777fffff1111
    fffff2222222222fffff111111111111111fffffffffffffff11111111111111111fffffffffffffff11111111111fffffffffffffffffffffffffffffff111111111111fffff7777777777fffff1111
    fffff2222222222fffff111111111111111fffffffffffffff11111111111111111fffffffffffffff11111111111fffffffffffffffffffffffffffffff111111111111fffff7777777777fffff1111
    ffffffffff22222fffff111111111111111fffffaaaaafffff11111111111111111fffffaaaaafffff11111fffffffffffaaaaaaaaaaaaaaaaaaaaafffff111111111111ffffffffff77777fffff1111
    ffffffffff22222fffff111111111111111fffffaaaaafffff11111111111111111fffffaaaaafffff11111fffffffffffaaaaaaaaaaaaaaaaaaaaafffff111111111111ffffffffff77777fffff1111
    ffffffffff22222fffff111111111111111fffffaaaaafffff11111111111111111fffffaaaaafffff11111fffffffffffaaaaaaaaaaaaaaaaaaaaafffff111111111111ffffffffff77777fffff1111
    ffffffffff22222fffff111111111111111fffffaaaaafffff11111111111111111fffffaaaaafffff11111fffffffffffaaaaaaaaaaaaaaaaaaaaafffff111111111111ffffffffff77777fffff1111
    11111fffff22222fffff111111111111111fffffaaaaafffffffffff11111fffffffffffaaaaafffff11111ffffffaaaaaffffffffffffffffffffffffff11111111111111111fffff77777fffff1111
    11111fffff22222fffff111111111111111fffffaaaaafffffffffff11111fffffffffffaaaaafffff11111ffffffaaaaaffffffffffffffffffffffffff11111111111111111fffff77777fffff1111
    11111fffff22222fffff111111111111111fffffaaaaafffffffffff11111fffffffffffaaaaafffff11111ffffffaaaaaffffffffffffffffffffffffff11111111111111111fffff77777fffff1111
    11111fffff22222fffff111111111111111fffffaaaaafffffffffff11111fffffffffffaaaaafffff11111ffffffaaaaaffffffffffffffffffffffffff11111111111111111fffff77777fffff1111
    11111fffff22222fffff111111111111111ffffffffffaaaaaffffff11111ffffffaaaaaffffffffff11111ffffffaaaaafffffffffffffffffffff1111111111111111111111fffff77777fffff1111
    11111fffff22222fffff111111111111111ffffffffffaaaaaffffff11111ffffffaaaaaffffffffff11111ffffffaaaaafffffffffffffffffffff1111111111111111111111fffff77777fffff1111
    11111fffff22222fffff111111111111111ffffffffffaaaaaffffff11111ffffffaaaaaffffffffff11111ffffffaaaaafffffffffffffffffffff1111111111111111111111fffff77777fffff1111
    11111fffff22222fffff111111111111111ffffffffffaaaaaffffff11111ffffffaaaaaffffffffff11111ffffffaaaaafffffffffffffffffffff1111111111111111111111fffff77777fffff1111
    11111fffff22222fffff11111111111111111111fffffaaaaafffffffffffffffffaaaaafffff1111111111fffffffffffaaaaaaaaaaaaaaaaffffffffff11111111111111111fffff77777fffff1111
    11111fffff22222fffff11111111111111111111fffffaaaaafffffffffffffffffaaaaafffff1111111111fffffffffffaaaaaaaaaaaaaaaaffffffffff11111111111111111fffff77777fffff1111
    11111fffff22222fffff11111111111111111111fffffaaaaafffffffffffffffffaaaaafffff1111111111fffffffffffaaaaaaaaaaaaaaaaffffffffff11111111111111111fffff77777fffff1111
    11111fffff22222fffff11111111111111111111fffffaaaaafffffffffffffffffaaaaafffff1111111111fffffffffffaaaaaaaaaaaaaaaaffffffffff11111111111111111fffff77777fffff1111
    11111fffff22222fffff11111111111111111111ffffffffffaaaaafffffffaaaaaffffffffff1111111111111111fffffffffffffffffffffaaaaafffff11111111111111111fffff77777fffff1111
    11111fffff22222fffff11111111111111111111ffffffffffaaaaafffffffaaaaaffffffffff1111111111111111fffffffffffffffffffffaaaaafffff11111111111111111fffff77777fffff1111
    11111fffff22222fffff11111111111111111111ffffffffffaaaaafffffffaaaaaffffffffff1111111111111111fffffffffffffffffffffaaaaafffff11111111111111111fffff77777fffff1111
    11111fffff22222fffff11111111111111111111ffffffffffaaaaafffffffaaaaaffffffffff1111111111111111fffffffffffffffffffffaaaaafffff11111111111111111fffff77777fffff1111
    ffffffffff22222fffffffff111111111111111111111fffffaaaaafffffffaaaaafffff111111111111111fffffffffffffffffffffffffffaaaaafffff111111111111ffffffffff77777fffffffff
    ffffffffff22222fffffffff111111111111111111111fffffaaaaafffffffaaaaafffff111111111111111fffffffffffffffffffffffffffaaaaafffff111111111111ffffffffff77777fffffffff
    ffffffffff22222fffffffff111111111111111111111fffffaaaaafffffffaaaaafffff111111111111111fffffffffffffffffffffffffffaaaaafffff111111111111ffffffffff77777fffffffff
    ffffffffff22222fffffffff111111111111111111111fffffaaaaafffffffaaaaafffff111111111111111fffffffffffffffffffffffffffaaaaafffff111111111111ffffffffff77777fffffffff
    ffff2222222222222222ffff111111111111111111111ffffffffffaaaaaaaffffffffff111111111111111ffffffaaaaaaaaaaaaaaaaaaaaaffffffffff111111111111ffff7777777777777777ffff
    ffff2222222222222222ffff111111111111111111111ffffffffffaaaaaaaffffffffff111111111111111ffffffaaaaaaaaaaaaaaaaaaaaaffffffffff111111111111ffff7777777777777777ffff
    ffff2222222222222222ffff111111111111111111111ffffffffffaaaaaaaffffffffff111111111111111ffffffaaaaaaaaaaaaaaaaaaaaaffffffffff111111111111ffff7777777777777777ffff
    ffff2222222222222222ffff111111111111111111111ffffffffffaaaaaaaffffffffff111111111111111ffffffaaaaaaaaaaaaaaaaaaaaaffffffffff111111111111ffff7777777777777777ffff
    ffffffffffffffffffffffff11111111111111111111111111fffffffffffffffff11111111111111111111ffffffffffffffffffffffffffffffff11111111111111111ffffffffffffffffffffffff
    ffffffffffffffffffffffff11111111111111111111111111fffffffffffffffff11111111111111111111ffffffffffffffffffffffffffffffff11111111111111111ffffffffffffffffffffffff
    ffffffffffffffffffffffff11111111111111111111111111fffffffffffffffff11111111111111111111ffffffffffffffffffffffffffffffff11111111111111111ffffffffffffffffffffffff
    ffffffffffffffffffffffff11111111111111111111111111fffffffffffffffff11111111111111111111ffffffffffffffffffffffffffffffff11111111111111111ffffffffffffffffffffffff
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111ffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffff1111111111111111111111111111
    1111111111111111111111111111ffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffff1111111111111111111111111111
    111111111111111111111111ffffff2222ffffff11111111111111111111111111111111fffff111111fffff11111111111111111111111111111111ffffff7777ffffff111111111111111111111111
    111111111111111111111111ffffff2222ffffff11111111111111111111111111111111f6111f1111f1116f11111111111111111111111111111111ffffff7777ffffff111111111111111111111111
    1111111111111111111111ffffff22222222ffffff111111111111111111111111111111f96111f11f11169f111111111111111111111111111111ffffff77777777ffffff1111111111111111111111
    1111111111111111111111ffffff22222222ffffff111111111111111111111111111111f996111ff111699f111111111111111111111111111111ffffff77777777ffffff1111111111111111111111
    11111111111111111111ffffffeeeeeeeeeeeeffffff1111111111111111111111111111f999611f1116999f1111111111111111111111111111ffffff999999999999ffffff11111111111111111111
    11111111111111111111ffffffeeeeeeeeeeeeffffff11111111111111111111111111111f9996f1116999f11111111111111111111111111111ffffff999999999999ffffff11111111111111111111
    11111111111111111111ffffee222222222222eeeeff111111111111111111111111111111f99f1116999f111111111111111111111111111111ffff997777777777779999ff11111111111111111111
    11111111111111111111ffffee222222222222eeeeff1111111111111111111111111111111ff1116999f1111111111111111111111111111111ffff997777777777779999ff11111111111111111111
    11111111111111111111ffee22ffffffffffff22eeff1111111111111111111111111111111f1116999ff1111111111111111111111111111111ff9977ffffffffffff7799ff11111111111111111111
    11111111111111111111ffffffffeeeeeeeeffffffff1111111111111111111111111f1111f1116999f11f1111f1111111111111111111111111ffffffff99999999ffffffff11111111111111111111
    11111111111111111111ffffffffeeeeeeeeffffffff111111111111111111111111f5f11f1116999f6111f11f5f111111111111111111111111ffffffff99999999ffffffff11111111111111111111
    111111111111111111ffffeeffbbff4444ffbbffeeffff1111111111111111111111f55ff1116999f996111ff55f1111111111111111111111ffff99ffbbffaaaaffbbff99ffff111111111111111111
    111111111111111111ffffeeffbbff4444ffbbffeeffff1111111111111111111111f5451116999ff999611f545f1111111111111111111111ffff99ffbbffaaaaffbbff99ffff111111111111111111
    111111111111111111ffeeee4411ffddddff1144eeeeff1111111111111111111111f554516999f11f999615455f1111111111111111111111ff9999aa11ffddddff11aa9999ff111111111111111111
    111111111111111111ffeeee4411ffddddff1144eeeeff11111111111111111111111f5545999f1111f9995455f11111111111111111111111ff9999aa11ffddddff11aa9999ff111111111111111111
    11111111111111111111ffffffffddddddddddeeeeff11111111111111111111111111f54459f111111f95445f11111111111111111111111111ffffffffdddddddddd9999ff11111111111111111111
    11111111111111111111ffffffffddddddddddeeeeff1111111111111111111111111f545545f111111f545545f1111111111111111111111111ffffffffdddddddddd9999ff11111111111111111111
    111111111111111111ffddddddddff444444eeeeff11111111111111111111111111f545f5545f1111f5455f545f1111111111111111111111ffddddddddffaaaaaa9999ff1111111111111111111111
    111111111111111111ffbbbbbbbbff22222222ff44ee1111111111111111111111ff545f1f5555f11f5555f1f545ff11111111111111111111ffbbbbbbbbff77777777ffaa9911111111111111111111
    111111111111111111ffbbbbbbbbff22222222ff44ee111111111111111111111f5545f111ffff1111ffff111f5455f1111111111111111111ffbbbbbbbbff77777777ffaa9911111111111111111111
    111111111111111111ffbbbbbbbbff22222222ffdd44111111111111111111111f525f11111111111111111111f525f1111111111111111111ffbbbbbbbbff77777777ffddaa11111111111111111111
    111111111111111111ffbbbbbbbbff22222222ffdd44111111111111111111111f555f11111111111111111111f555f1111111111111111111ffbbbbbbbbff77777777ffddaa11111111111111111111
    11111111111111111111ffccccff4455554444ff44441111111111111111111111fff1111111111111111111111fff1111111111111111111111ffccccffaa5555aaaaffaaaa11111111111111111111
    11111111111111111111ffccccff4455554444ff4444111111111111111111111111111111111111111111111111111111111111111111111111ffccccffaa5555aaaaffaaaa11111111111111111111
    1111111111111111111111ffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffff11111111111111111111111111
    1111111111111111111111ffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffff11111111111111111111111111
    11111111111111111111111111ffff1111ffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffff1111ffff11111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    `)
game.splash("Press A to start")
scene.setBackgroundImage(img`
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111fff1111f11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff111ff1111
    111f11f11ff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f11f1f11f111
    111f11f1f1f11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f11f1111f111
    111fff1111f11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff1111f1111
    111f111111f11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f11111f11111
    111f1111fffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1111ffff111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111dddd111111111111111111111111111111111111dddd111111111111111111111111111111111111dddd111111111111111111111111111111111111dddd1111111111111111111
    11111111111ddddddddddd11111111111111111111111111111ddddddddddd11111111111111111111111111111ddddddddddd11111111111111111111111111111ddddddddddd111111111111111111
    11111111dddddddddddddd11111111111111111111111111dddddddddddddd11111111111111111111111111dddddddddddddd11111111111111111111111111dddddddddddddd111111111111111111
    111111dddddddddddddddd111111111111111111111111dddddddddddddddd111111111111111111111111dddddddddddddddd111111111111111111111111dddddddddddddddd111111111111111111
    11111ddddddddddddddddd11111111111111111111111ddddddddddddddddd11111111111111111111111ddddddddddddddddd11111111111111111111111ddddddddddddddddd111111111111111111
    11111ddddddddddddddddd11111111111111111111111ddddddddddddddddd11111111111111111111111ddddddddddddddddd11111111111111111111111ddddddddddddddddd111111111111111111
    1111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd11111111111111111
    1111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd11111111111111111
    111dddddddddddddddddddd111111ddd11111111111dddddddddddddddddddd111111ddd11111111111dddddddddddddddddddd111111ddd11111111111dddddddddddddddddddd111111ddd11111111
    111dddddddddddddddddddd11111ddddd1111111111dddddddddddddddddddd11111ddddd1111111111dddddddddddddddddddd11111ddddd1111111111dddddddddddddddddddd11111ddddd1111111
    11ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd1111111
    11ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd1111111
    11ddddddddddddddddddddd11111dddddd11111111ddddddddddddddddddddd11111dddddd11111111ddddddddddddddddddddd11111dddddd11111111ddddddddddddddddddddd11111dddddd111111
    1dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd111111
    1dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd111111
    1dddddddddddddddddddddd1111ddddddd1111111dddddddddddddddddddddd1111ddddddd1111111dddddddddddddddddddddd1111ddddddd1111111dddddddddddddddddddddd1111ddddddd111111
    ddddddddddddddd6ddddddd1111ddddddd1111ddddddddddddddddd6ddddddd1111ddddddd1111ddddddddddddddddd6ddddddd1111ddddddd1111ddddddddddddddddd6ddddddd1111ddddddd1111dd
    dddddddddddddd66ddddddd1111ddddddd11dddddddddddddddddd66ddddddd1111ddddddd11dddddddddddddddddd66ddddddd1111ddddddd11dddddddddddddddddd66ddddddd1111ddddddd11dddd
    dddddddddddddd66ddddddd1111dddddddd1dddddddddddddddddd66ddddddd1111dddddddd1dddddddddddddddddd66ddddddd1111dddddddd1dddddddddddddddddd66ddddddd1111dddddddd1dddd
    ddddddddddddd6666dddddd1111dddddddddddddddddddddddddd6666dddddd1111dddddddddddddddddddddddddd6666dddddd1111dddddddddddddddddddddddddd6666dddddd1111ddddddddddddd
    ddddddddddd66666ddddddddddddddddddddddddddddddddddd66666ddddddddddddddddddddddddddddddddddd66666ddddddddddddddddddddddddddddddddddd66666dddddddddddddddddddddddd
    ddddddddddddd666ddddddddddddddd9999999ddddddddddddddd666ddddddddddddddd9999999ddddddddddddddd666ddddddddddddddd9999999ddddddddddddddd666ddddddddddddddd9999999dd
    dddddddddddd66666dddddddddddd99999999999dddddddddddd66666dddddddddddd99999999999dddddddddddd66666dddddddddddd99999999999dddddddddddd66666dddddddddddd99999999999
    9ddddddddddd6666666ddddddddd9999999999999ddddddddddd6666666ddddddddd9999999999999ddddddddddd6666666ddddddddd9999999999999ddddddddddd6666666ddddddddd999999999999
    999dddddddd666666ddddddddd99999999999999999dddddddd666666ddddddddd99999999999999999dddddddd666666ddddddddd99999999999999999dddddddd666666ddddddddd99999999999999
    9999ddddd666666666ddddddd9999999999999999999ddddd666666666ddddddd9999999999999999999ddddd666666666ddddddd9999999999999999999ddddd666666666ddddddd999999999999999
    99999dddddd66666666ddddd999999999999999999999dddddd66666666ddddd999999999999999999999dddddd66666666ddddd999999999999999999999dddddd66666666ddddd9999999999999999
    999999dd996666666dddddd99999999999999999999999dd996666666dddddd99999999999999999999999dd996666666dddddd99999999999999999999999dd996666666dddddd99999999999999999
    999999999999666666dddd996999999999999999999999999999666666dddd996999999999999999999999999999666666dddd996999999999999999999999999999666666dddd996999999999999999
    9999999999666666666dd99969999999999999999999999999666666666dd99969999999999999999999999999666666666dd99969999999999999999999999999666666666dd9996999999999999999
    9999999996666666666699966999999999999999999999999666666666669996699999999999999999999999966666666666999669999999999999999999999996666666666699966999999999999999
    9999999666666666669999996699999999999999999999966666666666999999669999999999999999999996666666666699999966999999999999999999999666666666669999996699999999999999
    9999999996666666669999966999999999999999999999999666666666999996699999999999999999999999966666666699999669999999999999999999999996666666669999966999999999999999
    9999999996666666999999666699999999999999999999999666666699999966669999999999999999999999966666669999996666999999999999999999999996666666999999666699999999999999
    9999999966966666666996666669999999999999999999996696666666699666666999999999999999999999669666666669966666699999999999999999999966966666666996666669999999999999
    9999999999666666666699966999999999996999999999999966666666669996699999999999699999999999996666666666999669999999999969999999999999666666666699966999999999996999
    9999999966666666666996666669999999996999999999996666666666699666666999999999699999999999666666666669966666699999999969999999999966666666666996666669999999996999
    9996999666666666666966666666999999966699999699966666666666696666666699999996669999969996666666666669666666669999999666999996999666666666666966666666999999966699
    9996699999666666666666666699999999996699999669999966666666666666669999999999669999966999996666666666666666999999999966999996699999666666666666666699999999996699
    9966999966666666666666666666999999966999996699996666666666666666666699999996699999669999666666666666666666669999999669999966999966666666666666666666999999966999
    9996699666666666666666666666699999666699999669966666666666666666666669999966669999966996666666666666666666666999996666999996699666666666666666666666699999666699
    9966666666666666666666666669999999966669996666666666666666666666666999999996666999666666666666666666666666699999999666699966666666666666666666666669999999966669
    9996666666666666666666666666699999666699999666666666666666666666666669999966669999966666666666666666666666666999996666999996666666666666666666666666699999666699
    9996666666666666666666666666669996666669999666666666666666666666666666999666666999966666666666666666666666666699966666699996666666666666666666666666669996666669
    9966666666666666666666666666999999666699996666666666666666666666666699999966669999666666666666666666666666669999996666999966666666666666666666666666999999666699
    9666666666666666666666666666669966666669966666666666666666666666666666996666666996666666666666666666666666666699666666699666666666666666666666666666669966666669
    9966666666666666666666666666666996666666996666666666666666666666666666699666666699666666666666666666666666666669966666669966666666666666666666666666666996666666
    9966666666666666666666666666669966666666996666666666666666666666666666996666666699666666666666666666666666666699666666669966666666666666666666666666669966666666
    6666666666666666666666666666666966666666666666666666666666666666666666696666666666666666666666666666666666666669666666666666666666666666666666666666666966666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    `)
tiles.setCurrentTilemap(tilemap`level1`)
Player_1()
Player_2()
game.onUpdateInterval(1000, function () {
    hitP1 = true
})
game.onUpdateInterval(1000, function () {
    hitP2 = true
})
forever(function () {
    scene.centerCameraAt(0, (P1.y + P2.y) / 2)
    if (statusbar1.value == 0) {
        pause(50)
        mp.gameOverPlayerWin(mp.playerSelector(mp.PlayerNumber.Two))
    }
    if (statusbar2.value == 0) {
        pause(50)
        mp.gameOverPlayerWin(mp.playerSelector(mp.PlayerNumber.One))
    }
})
forever(function () {
    while (shotP1 == false) {
        pause(5000)
        shotP1 = true
    }
})
forever(function () {
    while (shotP2 == false) {
        pause(5000)
        shotP2 = true
    }
})
