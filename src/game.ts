import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../0ee46c79-338c-445a-a506-ea26d80fbe46/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("models/FloorBaseSand_01/FloorBaseSand_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const tallPalmTree = new Entity('tallPalmTree')
engine.addEntity(tallPalmTree)
tallPalmTree.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(12.5, 0, 3.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tallPalmTree.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("models/PalmTree_02/PalmTree_02.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
tallPalmTree.addComponentOrReplace(gltfShape2)

const foldingChair2 = new Entity('foldingChair2')
engine.addEntity(foldingChair2)
foldingChair2.setParent(_scene)
const gltfShape3 = new GLTFShape("models/Chair_05/Chair_05.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
foldingChair2.addComponentOrReplace(gltfShape3)
const transform4 = new Transform({
  position: new Vector3(13.5, 0, 10.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
foldingChair2.addComponentOrReplace(transform4)

const caribbeanShoreWithRocksPatch = new Entity('caribbeanShoreWithRocksPatch')
engine.addEntity(caribbeanShoreWithRocksPatch)
caribbeanShoreWithRocksPatch.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(0, 0, 16),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000078678131104, 1, 1.0000078678131104)
})
caribbeanShoreWithRocksPatch.addComponentOrReplace(transform5)
const gltfShape4 = new GLTFShape("models/WaterPatchCurve_02/WaterPatchCurve_02.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
caribbeanShoreWithRocksPatch.addComponentOrReplace(gltfShape4)

const beachUmbrella = new Entity('beachUmbrella')
engine.addEntity(beachUmbrella)
beachUmbrella.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(13, 0, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
beachUmbrella.addComponentOrReplace(transform6)
const gltfShape5 = new GLTFShape("models/Umbrella_01/Umbrella_01.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
beachUmbrella.addComponentOrReplace(gltfShape5)

const foldingChair = new Entity('foldingChair')
engine.addEntity(foldingChair)
foldingChair.setParent(_scene)
foldingChair.addComponentOrReplace(gltfShape3)
const transform7 = new Transform({
  position: new Vector3(13.5, 0, 13.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
foldingChair.addComponentOrReplace(transform7)

const beachFern2 = new Entity('beachFern2')
engine.addEntity(beachFern2)
beachFern2.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(12.5, 0, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
beachFern2.addComponentOrReplace(transform8)
const gltfShape6 = new GLTFShape("models/Grass_01/Grass_01.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
beachFern2.addComponentOrReplace(gltfShape6)

const arecaPalm = new Entity('arecaPalm')
engine.addEntity(arecaPalm)
arecaPalm.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(14.5, 0, 1.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
arecaPalm.addComponentOrReplace(transform9)
const gltfShape7 = new GLTFShape("models/JunglePlant_09/JunglePlant_09.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
arecaPalm.addComponentOrReplace(gltfShape7)

const halfCoconut = new Entity('halfCoconut')
engine.addEntity(halfCoconut)
halfCoconut.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(14.5, 0, 4.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
halfCoconut.addComponentOrReplace(transform10)
const gltfShape8 = new GLTFShape("models/Coco_02/Coco_02.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
halfCoconut.addComponentOrReplace(gltfShape8)

const iceCreamKiosk = new Entity('iceCreamKiosk')
engine.addEntity(iceCreamKiosk)
iceCreamKiosk.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(3, 0, 1.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
iceCreamKiosk.addComponentOrReplace(transform11)
const gltfShape9 = new GLTFShape("models/IceCreamTruck_01/IceCreamTruck_01.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
iceCreamKiosk.addComponentOrReplace(gltfShape9)

const nft = new Entity('nft')
engine.addEntity(nft)
nft.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(12.5, 3.511324882507324, 2.5),
  rotation: new Quaternion(2.636940619744725e-15, -0.8819212913513184, 1.0513320347627086e-7, -0.4713967442512512),
  scale: new Vector3(3.6887729167938232, 3.375, 1.9494431018829346)
})
nft.addComponentOrReplace(transform12)
const nftShape = new NFTShape("ethereum://0x5d00d312e171be5342067c09bae883f9bcb2003b/30574")
nftShape.withCollisions = true
nftShape.isPointerBlocker = true
nftShape.visible = true
nftShape.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft.addComponentOrReplace(nftShape)

const nft2 = new Entity('nft2')
engine.addEntity(nft2)
nft2.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(10.994852066040039, 1, 2.7521071434020996),
  rotation: new Quaternion(4.404326956717079e-15, -0.9807853698730469, 1.1691872003893877e-7, -0.19509035348892212),
  scale: new Vector3(3.4590444564819336, 3.2804837226867676, 1.7825188636779785)
})
nft2.addComponentOrReplace(transform13)
const nftShape2 = new NFTShape("ethereum://0x5d00d312e171be5342067c09bae883f9bcb2003b/25255")
nftShape2.withCollisions = true
nftShape2.isPointerBlocker = true
nftShape2.visible = true
nftShape2.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft2.addComponentOrReplace(nftShape2)

const nft6 = new Entity('nft6')
engine.addEntity(nft6)
nft6.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(13, 1, 5.5),
  rotation: new Quaternion(4.3255750092896506e-9, 0.7730104923248291, -7.789049760731359e-8, 0.6343933343887329),
  scale: new Vector3(3.750011682510376, 3, 1.0000028610229492)
})
nft6.addComponentOrReplace(transform14)
const nftShape3 = new NFTShape("ethereum://0x5d00d312e171be5342067c09bae883f9bcb2003b/25236")
nftShape3.withCollisions = true
nftShape3.isPointerBlocker = true
nftShape3.visible = true
nftShape3.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft6.addComponentOrReplace(nftShape3)

const teleport = new Entity('teleport')
engine.addEntity(teleport)
teleport.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(6.5, 0, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5099999308586121, 0.5, 0.4999999701976776)
})
teleport.addComponentOrReplace(transform15)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
script1.init(options)
script1.spawn(teleport, {"x":"-92","y":"-74","name":"Ethermon house"}, createChannel(channelId, teleport, channelBus))