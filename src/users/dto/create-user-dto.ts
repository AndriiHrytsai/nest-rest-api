import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {

  @ApiProperty({ example: "test@gmail.com", description: "user email" })
  @IsString({ message: "Always must be a string" })
  @IsEmail({}, { message: "Wrong email" })
  readonly email: string;

  @ApiProperty({ example: "test", description: "user password" })
  @IsString({ message: "Always must be a string" })
  @Length(4, 10, { message: "Min 4 symbols and max 10" })
  readonly password: string;
}
