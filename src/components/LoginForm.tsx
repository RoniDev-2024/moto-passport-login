import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { BiUser, BiLock } from "react-icons/bi";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Por favor complete todos los campos",
      });
      return;
    }
    // Aquí iría la lógica de autenticación
    toast({
      title: "Iniciando sesión",
      description: "Procesando sus credenciales...",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f8f7]">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg animate-fadeIn">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">MotoPase</h1>
          <p className="text-motopase-secondary">Sistema de Gestión de Salvoconductos</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="username">Usuario</Label>
            <div className="relative">
              <BiUser className="absolute left-3 top-3 text-motopase-secondary" />
              <Input
                id="username"
                type="text"
                placeholder="Ingrese su usuario"
                className="pl-10"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <div className="relative">
              <BiLock className="absolute left-3 top-3 text-motopase-secondary" />
              <Input
                id="password"
                type="password"
                placeholder="Ingrese su contraseña"
                className="pl-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="remember"
              checked={rememberMe}
              onCheckedChange={(checked) => setRememberMe(checked as boolean)}
            />
            <Label htmlFor="remember" className="text-sm text-gray-600">
              Recordar mis credenciales
            </Label>
          </div>

          <Button
            type="submit"
            className="w-full bg-motopase-primary hover:bg-motopase-primary/90 text-white"
          >
            Iniciar Sesión
          </Button>
        </form>

        <div className="text-center">
          <a href="#" className="text-sm text-motopase-primary hover:underline">
            ¿Olvidó su contraseña?
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;