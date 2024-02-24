const { NextResponse } = require("next/server");

export async function GET(req) {
    const user = req.session.get('user');
  
    if (user) {
      return NextResponse.status(200).json({ user });
    } else {
      return NextResponse.status(401).json({ error: 'Not authenticated' });
    }
  }
  