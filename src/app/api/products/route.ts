import { NextRequest, NextResponse } from 'next/server'
import * as products from '../../../data/products.json'

export async function GET() {
  return NextResponse.json(products)
}
