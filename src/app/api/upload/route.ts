// import { writeFile } from 'fs/promises'
import { NextRequest, NextResponse } from 'next/server'
import tensorflow, { Tensor3D } from '@tensorflow/tfjs'
import * as mobilenet from '@tensorflow-models/mobilenet'
import * as tfnode from '@tensorflow/tfjs-node'

export async function POST(request: NextRequest) {
  const data = await request.formData()
  const file: File | null = data.get('file') as unknown as File

  if (!file) {
    return NextResponse.json({ success: false })
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)
  const tfimage = tfnode.node.decodeImage(buffer)
  const mobilenetModel = await mobilenet.load()
  const predictions = await mobilenetModel.classify(tfimage as Tensor3D)
  console.log(predictions)

  return NextResponse.json({ success: !!predictions, predictions })
}
