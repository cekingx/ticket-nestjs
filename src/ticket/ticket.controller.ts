import { Body, Controller, Post, Res } from '@nestjs/common';
import { GenerateTicketDto } from './dto/generate-ticket.dto';
import { TicketService } from './ticket.service';

@Controller('ticket')
export class TicketController {
  constructor(private ticketService: TicketService) {}

  @Post('generate')
  async generateTicket(@Body() body: GenerateTicketDto, @Res() res) {
    const ticket = await this.ticketService.createTicket(body);
    const image = await this.ticketService.render(ticket);
    res.writeHead(200, {
      'Content-Type': 'image/png',
      'X-filename': `ticket-${ticket.id + 10000}.png`,
    });
    res.end(image, 'binary');
  }
}
