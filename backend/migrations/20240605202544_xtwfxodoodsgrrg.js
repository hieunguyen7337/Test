'use strict';

/**
 * Migration: 20240605202544_xtwfxodoodsgrrg
 * Description: Remove column
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('kltxujaaci', function(table) {
    table.text('xbzxheapia');
    table.string('gqeuskywtv');
    table.text('ljpbrwkopr');
    table.text('vaweiqlaav');
    table.text('uhbuyzbsgi');
    table.text('qwikadngiz');
    table.integer('rtcewaqzrp');
    table.string('jwxugrxihc');
  });
  await knex.schema.alterTable('btuuuuscfr', function(table) {
    table.timestamp('cmmywsvcka');
    table.text('vqffnqyjnq');
    table.float('dshvrkzlwx');
  });
  await knex.schema.alterTable('yehtxtdyvx', function(table) {
    table.integer('rcjlamxzxd');
    table.float('vjbokpcllx');
    table.text('aebzjmltfh');
    table.string('celfluavdl');
    table.string('bikufnhgsh');
  });
  await knex.schema.alterTable('qogreixzlv', function(table) {
    table.timestamp('xccfsncdae');
    table.float('bogjgqdhaj');
    table.float('paqsrwpmwx');
  });
  await knex.schema.alterTable('rtqfjskcjw', function(table) {
    table.float('dxmnvmoysr');
    table.float('xyuheaiali');
    table.text('ssdsmooaxl');
    table.float('nrazmvlsqu');
    table.integer('gnpyxwhutb');
    table.timestamp('usbdyqzxyb');
  });
  await knex.schema.alterTable('xtrideaxjg', function(table) {
    table.timestamp('onskkeldjf');
    table.text('hddmxxitns');
    table.timestamp('qvsoznqaer');
    table.float('lbzpfdwkee');
    table.json('blnjekzbgz');
    table.bigInteger('xqyyrbipnd');
    table.json('zknymqjymt');
    table.timestamp('vhfojvaqym');
    table.bigInteger('ylokzzkuug');
  });
  await knex.schema.alterTable('iogpqhhncl', function(table) {
    table.timestamp('vhluaofftg');
    table.boolean('afpcgltzns');
    table.json('ivugvtasuc');
    table.integer('etttecrdbv');
    table.bigInteger('axcdjaslpf');
    table.string('ldoqqaleji');
    table.text('bezydglwgj');
  });
  await knex.schema.alterTable('hzxqezxbvd', function(table) {
    table.text('ughojhjaem');
    table.text('fmudjxchcx');
    table.json('anqyjnonnb');
    table.timestamp('zlvbhkhrls');
    table.boolean('jsccuviqte');
    table.boolean('mhydikkfzq');
    table.float('shzgagjbob');
    table.float('yzjyqivwaz');
    table.string('shsalwubdu');
    table.json('pusedrqzfm');
  });
  await knex.schema.alterTable('dyplapynul', function(table) {
    table.string('mmzrlxveku');
    table.string('baiideudro');
    table.json('nyummuyduv');
    table.bigInteger('vortakmwpa');
    table.boolean('ojewwbirfq');
    table.text('plfpqbpxnr');
    table.bigInteger('vjjmmxtizr');
    table.boolean('fcqnnivcdw');
  });
  await knex.schema.alterTable('qdxylahuur', function(table) {
    table.string('ehoemsugxw');
    table.timestamp('xxofrfappd');
    table.text('xkjypnoddq');
    table.json('yygnfhgllf');
    table.bigInteger('lbnnltztmy');
    table.string('dhtwpbophs');
    table.timestamp('yszqjdkjbi');
    table.timestamp('izrlofyopo');
    table.string('ehacarxkpx');
    table.text('johspjxdby');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};