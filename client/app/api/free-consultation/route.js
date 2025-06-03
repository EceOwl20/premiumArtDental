import { NextResponse } from "next/server";

export async function POST(request) {
try {
const { name, phone } = await request.json();
if (!name || !phone) {
return NextResponse.json({ message: "Eksik alan var" }, { status: 400 });
}
// …(aynı log, e-posta, DB kaydetme işlemleri)…
console.log("Yeni ücretsiz danışmanlık talebi:", { name, phone });
return NextResponse.json({ message: "Başarıyla alındı." }, { status: 200 });
} catch (err) {
console.error(err);
return NextResponse.json({ message: "Sunucu hatası." }, { status: 500 });
}
}