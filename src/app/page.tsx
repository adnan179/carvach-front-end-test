import Form from "@/components/form";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center px-4">
      <Form/>
      <Sidebar/>
    </main>
  );
}
