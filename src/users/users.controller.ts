import { Body, Controller, Get, Post, UseGuards, UsePipes } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user-dto";
import { UsersService } from "./users.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { User } from "./users.model";
// import { JwtAuthGuard } from "../auth/jwt-auth-guard";
import { Roles } from "../auth/roles-auth.decorator";
import { RolesGuards } from "../auth/roles.guards";
import { AddRoleDto } from "./dto/add-role-dto";
import { BanUserDto } from "./dto/ban-user-dto";
import { UnbanUserDto } from "./dto/unban-user-dto";
import { ValidationPipe } from "../pipes/validation.pipe";

@ApiTags("Users")
@Controller("users")
export class UsersController {

  constructor(private userService: UsersService) {
  }

  @ApiOperation({ summary: "Create user" })
  @ApiResponse({ status: 200, type: User })
  // @UsePipes(ValidationPipe)
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.userService.createUser(userDto);
  }

  @ApiOperation({ summary: "Get users" })
  @ApiResponse({ status: 200, type: [User] })
  @UseGuards(RolesGuards)
  @Roles("ADMIN")
  @Get()
  getAll() {
    return this.userService.getAllUsers();
  }

  @ApiOperation({ summary: "Add role " })
  @ApiResponse({ status: 200 })
  @UseGuards(RolesGuards)
  @Roles("ADMIN")
  @Post("/role")
  addRole(@Body() dto: AddRoleDto) {
    return this.userService.addRole(dto);
  }

  @ApiOperation({ summary: "ban the user" })
  @ApiResponse({ status: 200 })
  @UseGuards(RolesGuards)
  @Roles("ADMIN")
  @Post("/ban")
  banUser(@Body() dto: BanUserDto) {
    return this.userService.banUser(dto);
  }

  @ApiOperation({ summary: "unban the user" })
  @ApiResponse({ status: 200 })
  @UseGuards(RolesGuards)
  @Roles("ADMIN")
  @Post("/unban")
  unbanUser(@Body() dto: UnbanUserDto) {
    return this.userService.unbanUser(dto);
  }

}
