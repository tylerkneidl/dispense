import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NewContactForm from "./components/NewContactForm";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NewContactForm />
    </QueryClientProvider>
  );
}

export default App;
