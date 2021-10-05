import { Body, Controller, Post, Res } from '@nestjs/common';
import { GenerateTicketDto } from './dto/generate-ticket.dto';
import { TicketService } from './ticket.service';

@Controller('ticket')
export class TicketController {
  constructor(private ticketService: TicketService) {}

  @Post('generate')
  async generateTicket(@Body() body: GenerateTicketDto, @Res() res) {
    const code = '870c3738-8683-4ac2-b634-174925f9808f';
    const orderId = '11104';
    const { ticketType, orderedBy } = body;
    const image = await this.ticketService.render(
      code,
      orderId,
      ticketType,
      orderedBy,
    );
    res.writeHead(200, {
      'Content-Type': 'image/png',
      'X-filename': `ticket-${orderId}.png`,
    });
    res.end(image, 'binary');
  }
}
