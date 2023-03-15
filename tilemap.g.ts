// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`0a000a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000303000300000000000000000000000003000000000000000003000000000000000000000001010101010101010000010202020202020100`, img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . 2 . 2 2 . 2 . . 
. . . . . . . . . . 
2 . . . . . . . . 2 
. . . . . . . . . . 
. 2 2 2 2 2 2 2 2 . 
. 2 2 2 2 2 2 2 2 . 
`, [myTiles.transparency16,sprites.dungeon.floorLight4,sprites.dungeon.floorLight2,sprites.dungeon.floorDarkDiamond], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
