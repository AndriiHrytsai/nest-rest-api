import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class AddRoleDto {

  @ApiProperty({ example: "ADMIN", description: "user role" })
  @IsString({ message: "Always must be a string" })
  readonly value: string;

  @ApiProperty({ example: 1, description: "user id" })
  @IsNumber({},{ message: "Always must be a number" })
  readonly userId: number;
}
