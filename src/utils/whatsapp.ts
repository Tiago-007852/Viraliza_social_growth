import { WhatsAppMessageConfig } from '../types';
import { WHATSAPP_CONFIG } from '../data/config';

/**
 * Número do WhatsApp atualmente configurado no site e nos botões CTA.
 * Mudar esta constante atualiza todos os links que apontam para o WhatsApp
 * (pacotes, botões e QR Codes) sem que seja necessário editar várias partes.
 */

export function formatFollowersCount(count: number): string {
  return new Intl.NumberFormat('pt-PT').format(count);
}

export function formatPrice(price: number): string {
  return `€${price.toFixed(2).replace('.', ',')}`;
}

export function generateWhatsAppMessage({
  platformName,
  packageName,
  followers,
  likes,
  price,
}: WhatsAppMessageConfig): string {
  const formattedFollowers = formatFollowersCount(followers);
  const formattedLikes = formatFollowersCount(likes);
  const formattedPrice = formatPrice(price);

  return `Olá! 👋

Tenho interesse no pacote ${packageName} para ${platformName}.

📦 ${formattedFollowers} seguidores
❤️ ${formattedLikes} likes
💰 ${formattedPrice}

Gostaria de saber como posso avançar.`;
}

export function getWhatsAppUrl(config: WhatsAppMessageConfig): string {
  const message = generateWhatsAppMessage(config);
  return `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodeURIComponent(message)}`;
}
