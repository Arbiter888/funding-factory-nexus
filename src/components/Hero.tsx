<lov-code>
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Globe, Search, Users, MapPin, Brain } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Hero = () => {
  const [activeSection, setActiveSection] = useState<'syndicate' | 'expansion'>('expansion');

  const toggleSection = (section: 'syndicate' | 'expansion') => {
    setActive