'use strict';

/**
 * Migration: 20240716014546_tosgdjwnnaxavzd
 * Description: Rename field
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('lxccepvhwz', function(table) {
    table.json('zjhgcfawzl');
    table.json('rdqhcqicjn');
    table.float('eolqerdrct');
    table.boolean('rzvzfmpwog');
  });
  await knex.schema.alterTable('rgacnscqbi', function(table) {
    table.boolean('betonihyup');
    table.bigInteger('zzssvosriv');
    table.boolean('nlerskuzzy');
    table.bigInteger('saafopmblu');
    table.float('fdcgzrestb');
    table.string('iwpzsqukkh');
  });
  await knex.schema.alterTable('jfrgvjmwfv', function(table) {
    table.boolean('eeqvzepwwo');
    table.bigInteger('dufusvhlhe');
    table.integer('rrudhxmtce');
  });
  await knex.schema.alterTable('kzkustxprb', function(table) {
    table.json('qtidgllbxe');
    table.float('ftedzwnqxy');
    table.bigInteger('ljcaowxpqd');
    table.boolean('fnvccjqyyx');
    table.string('rmthzdqulr');
  });
  await knex.schema.alterTable('osxtvboblt', function(table) {
    table.bigInteger('tdzaehfcbr');
    table.json('cjrcbwvknr');
    table.json('exdpltzojt');
    table.float('gpvpagesvm');
    table.integer('heynxmvzpb');
    table.timestamp('ftqabwxckt');
  });
  await knex.schema.alterTable('nrbrgjahjo', function(table) {
    table.text('cjfxozepnm');
    table.timestamp('ydlaofnaoj');
    table.json('yebfuapwtm');
    table.timestamp('guagiljyuc');
    table.integer('cvzlpjritc');
    table.boolean('xmqqmfqaps');
    table.integer('sxbudrevcn');
  });
  await knex.schema.alterTable('yfmnixfnef', function(table) {
    table.float('ltqfbxabma');
    table.timestamp('glzrrpclmx');
    table.integer('jwmfnahphr');
    table.timestamp('rbkvbsqgwe');
    table.bigInteger('nhvcdlajpk');
    table.json('uxvjxgdsnn');
    table.json('rlimysielv');
  });
  await knex.schema.alterTable('qsqkvroifb', function(table) {
    table.boolean('qaqmdryrbn');
    table.integer('bouvoakvok');
    table.text('fwuppdnisw');
    table.integer('dtjfihxiwk');
  });
  await knex.schema.alterTable('ewczygbmhn', function(table) {
    table.integer('muijyxomty');
    table.json('wmaxohfuli');
    table.float('vdgmsbkfao');
    table.timestamp('zlwnhjtqyc');
    table.boolean('wnurkgtwyd');
    table.string('fhiysdbwzw');
    table.float('amkznuhvaj');
    table.string('bcksidffkq');
    table.boolean('axbdpkfcqv');
    table.string('nswewxbfjk');
  });
  await knex.schema.alterTable('ekypoznctx', function(table) {
    table.integer('uunffonaob');
    table.text('duqdqknfha');
    table.json('uxctrzgjdp');
    table.integer('pdawitksmf');
    table.timestamp('nlnaylhcrf');
  });
  await knex.schema.alterTable('eeywsnvxpj', function(table) {
    table.float('gryzebyeql');
    table.float('aqekjeknrj');
    table.json('cbjnwpovje');
  });
  await knex.schema.alterTable('ysjkccdoho', function(table) {
    table.integer('sjyrapyhed');
    table.integer('oxoexkuotj');
    table.integer('rlrqnuyjls');
    table.float('btoaswiego');
  });
  await knex.schema.alterTable('wbpiherynz', function(table) {
    table.timestamp('pfyogrvupr');
    table.json('bujayiiuie');
    table.text('ggltqgsufl');
    table.json('lvuixznrav');
    table.boolean('cwnlitbxxl');
    table.text('ziserjrecw');
    table.float('jfjfprkfll');
    table.float('rfswbyelhq');
    table.bigInteger('aiofbvcdvi');
  });
  await knex.schema.alterTable('iifrljehtt', function(table) {
    table.integer('iprtnpvygd');
    table.float('nczsanalra');
    table.bigInteger('dejtvvfknh');
    table.bigInteger('mtittwzajc');
    table.boolean('slckxmmzos');
    table.timestamp('cvtrdaqtae');
    table.json('iwrscfckzx');
    table.text('mmrxuiaxqf');
    table.timestamp('wkprxundkc');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};