'use strict';

/**
 * Migration: 20241003031102_bmjsydclecbwdgk
 * Description: Add index
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('cdsmiwlfcu', function(table) {
    table.bigInteger('etpvmpxodg');
    table.string('xxsxgdpcbs');
    table.text('bfaqyzsuvr');
    table.float('liuwyxfdnx');
  });
  await knex.schema.alterTable('fffozxerha', function(table) {
    table.text('dvicdtmzax');
    table.float('jkunigxllr');
    table.boolean('uqwlztoamk');
  });
  await knex.schema.alterTable('epjhkeofdz', function(table) {
    table.timestamp('rncpihemfa');
    table.text('woqaeavofp');
    table.integer('gytvkntybi');
    table.string('lclxtbydcj');
    table.timestamp('gzvmpfbmuk');
    table.boolean('znctegfoyc');
    table.text('fzxzicpgav');
    table.bigInteger('tkvkbqaezk');
    table.string('pmahnhckbo');
    table.boolean('eplvwkgbzz');
  });
  await knex.schema.alterTable('cvevwfwfqf', function(table) {
    table.json('igiikqtuef');
    table.bigInteger('bipolckcta');
    table.bigInteger('iaqjrujrqk');
    table.string('udfkecqdvr');
  });
  await knex.schema.alterTable('vizmdafbsm', function(table) {
    table.boolean('ferevteawg');
    table.boolean('unczutnabk');
    table.integer('nvrhttmaxn');
  });
  await knex.schema.alterTable('dlqmldvfru', function(table) {
    table.boolean('nwstmtjinw');
    table.timestamp('bcoqyzsudz');
    table.string('xvtjhlbkwi');
    table.boolean('tyvzvahizu');
    table.integer('bffqusluse');
    table.integer('ybkzusiwfj');
    table.float('iclwrowspc');
    table.bigInteger('rjjnbeqnkm');
    table.float('vjaetcqfgw');
    table.float('bykcoahkcg');
  });
  await knex.schema.alterTable('utavfckazq', function(table) {
    table.timestamp('jvuomxfmxs');
    table.timestamp('gqyvlyjnmj');
    table.boolean('jvxgainqge');
    table.json('fzzpnhihno');
    table.integer('eeimaecwwj');
    table.text('ilrhfqvosv');
    table.text('gamfbnuhfz');
    table.float('bmvahkeenu');
  });
  await knex.schema.alterTable('kwtajqssby', function(table) {
    table.timestamp('uplqekwajc');
    table.json('manzyzbhqm');
    table.string('uafdgniohn');
    table.timestamp('eevoevahog');
    table.integer('aedbojasnx');
    table.float('ertmpcbfvj');
    table.boolean('wfqmfzyphy');
    table.float('imkcoufvmn');
    table.timestamp('crhzlxhxmd');
  });
  await knex.schema.alterTable('teumlievgm', function(table) {
    table.json('wgjgydfygk');
    table.boolean('ppnwhbbovl');
    table.json('ujfpikhjdm');
    table.text('hxuflgkfkk');
    table.bigInteger('xpjaryzqkp');
    table.integer('fugfhqwffp');
  });
  await knex.schema.alterTable('wptrudpbvu', function(table) {
    table.integer('zrxunixcdw');
    table.timestamp('dvyvanwpyc');
    table.boolean('quszjlurki');
    table.text('uslvqwnynf');
    table.boolean('vtzzbfaobc');
    table.integer('kevpyovfbw');
    table.string('yuweexazsj');
  });
  await knex.schema.alterTable('detxbwqevk', function(table) {
    table.float('sovqbuxdhh');
    table.bigInteger('dcxpgfqcty');
    table.json('nqzqkuoriq');
    table.boolean('aezerlojpa');
    table.json('scprjtmcnm');
    table.bigInteger('agkvqcgyhi');
  });
  await knex.schema.alterTable('qzsrmtlagc', function(table) {
    table.json('dhapyyxvam');
    table.integer('tjhnhwmxjb');
    table.string('clyzpciuvm');
  });
  await knex.schema.alterTable('algldcqfpt', function(table) {
    table.boolean('zjrplsmsez');
    table.timestamp('artdcmrqbi');
    table.string('mfnfcvffvu');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};