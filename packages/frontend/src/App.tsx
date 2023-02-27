import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DisplayContacts from "./components/DisplayContacts";
import NewContactForm from "./components/NewContactForm";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DisplayContacts />
      <NewContactForm />
    </QueryClientProvider>
  );
}

export default App;
