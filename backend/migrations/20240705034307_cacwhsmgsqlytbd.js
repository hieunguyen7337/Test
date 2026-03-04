'use strict';

/**
 * Migration: 20240705034307_cacwhsmgsqlytbd
 * Description: Fix typo in column name
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('fcomcccwrh', function(table) {
    table.json('acwynjcgcj');
    table.boolean('tusbkhxwwd');
    table.float('zcupoeizfq');
    table.integer('fqowjlvmar');
    table.string('jztzsdatlv');
  });
  await knex.schema.alterTable('ihecpdpcnw', function(table) {
    table.json('mjjgekcijs');
    table.timestamp('poagcpigbi');
    table.float('hfduezasyn');
    table.integer('vvvacwcxwx');
    table.bigInteger('jpfndxmrqy');
  });
  await knex.schema.alterTable('yzpcdltmnl', function(table) {
    table.bigInteger('yhahyamlzx');
    table.integer('nvbzgrcagt');
    table.float('gsxuhuhbln');
    table.float('utchtafszq');
    table.timestamp('dgzzfcrqwf');
    table.integer('shovtsldej');
    table.integer('yqvxkqdqsh');
  });
  await knex.schema.alterTable('nkzxivbcqu', function(table) {
    table.boolean('dfnldljqre');
    table.json('eccswhchbs');
    table.json('jlhgzqnpvk');
  });
  await knex.schema.alterTable('alynrkdhnd', function(table) {
    table.integer('egjuetpars');
    table.text('repjdfjoag');
    table.float('nhtcecxnov');
    table.timestamp('biirxayjvb');
    table.text('wpgmhslwyv');
    table.text('hainjlohwx');
    table.string('egpcyqrimt');
    table.boolean('xallittorw');
    table.timestamp('cpovplvakt');
    table.text('qriufejjqi');
  });
  await knex.schema.alterTable('jfihufahxe', function(table) {
    table.integer('eatdrgeekq');
    table.boolean('gwaonyveri');
    table.integer('asorpnwhbp');
    table.integer('lnllgshxix');
    table.integer('csuxdywzxg');
    table.json('hmygrkomxu');
  });
  await knex.schema.alterTable('apqajlbvpt', function(table) {
    table.bigInteger('omtnmjyhcz');
    table.string('dyxjthqanv');
    table.string('ewajfanieb');
    table.json('nnubuvcqel');
    table.boolean('lipthnrfrs');
    table.integer('ecyyhjearc');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};