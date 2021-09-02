import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsers1630593037906 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [{
          name: 'id',
          type: 'varchar',
          isPrimary: true,
        },
        {
          name: 'username',
          type: 'varchar',
        },
        {
          name: 'email',
          type: 'varchar',
        },
        {
          name: 'password',
          type: 'varchar',
        },
        {
          name: 'active',
          type: 'int',
          default: 0,
        },
        {
          name: 'createdAt',
          type: 'timestamp',
          default: 'now()',
        }],
      }), true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
