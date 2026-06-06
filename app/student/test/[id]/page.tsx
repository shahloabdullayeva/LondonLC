import { Suspense } from "react";
import { allTests } from "@/data/ielts-tests";
import TestClient from "./TestClient";

export function generateStaticParams() {
  return allTests.map((test) => ({ id: test.id }));
}

export default function TestPage() {
  return <Suspense><TestClient /></Suspense>;
}
